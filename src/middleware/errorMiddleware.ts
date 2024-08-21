import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import ResponseError from "../utils/ResponseError.js";

const handleErrors = (error: Error, res: Response, isDev: boolean) => {
  const errorResponse: any = {
    status: "error",
    message: isDev
      ? "Server Error"
      : "Something went wrong! Please try again later",
  };

  if (error instanceof ZodError) {
    errorResponse.status = "fail";
    errorResponse.message = "Validation Error";
    errorResponse.errors = error.issues;
    res.status(400);
  } else if (error instanceof ResponseError) {
    errorResponse.status = error.status;
    errorResponse.message = error.message;
    res.status(error.statusCode);
  } else {
    res.status(500);
  }

  if (isDev) {
    errorResponse.stack = error.stack ? error.stack : error;
  }

  res.json(errorResponse);
};

export const globalErrorMiddleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  handleErrors(error, res, process.env.NODE_ENV === "development");
};
