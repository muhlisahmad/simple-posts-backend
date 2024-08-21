// IMPORT PACKAGE
import express, { Express } from "express";
import cors from "cors";

// IMPORT ROUTES
import articleRouter from "./routes/articleRouter.js";

// IMPORT CONTROLLER, HANDLER, MIDDLEWARE
import ResponseError from "./utils/ResponseError.js";
import { globalErrorMiddleware } from "./middleware/errorMiddleware.js";

const app: Express = express();

// MIDDLEWARE
app.use(express.json());
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"],
    credentials: true,
  })
);

// USE ROUTES
app.use("/api/v1/article", articleRouter);

app.all("*", (req, res, next) => {
  const err = new ResponseError(
    "The resource requested could not be found on the server",
    404
  );
  next(err);
});

// GLOBAL ERROR HANLDER
app.use(globalErrorMiddleware);

export default app;
