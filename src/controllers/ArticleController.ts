import { NextFunction, Request, Response } from "express";
import { asyncErrorHandler } from "../utils/AsyncErrorHandler.js";
import {
  ArticleParams,
  ArticleQuery,
  ArticleReqBody,
  ArticleResBody,
  ArticlesResBody,
} from "../types/articles.js";
import ArticleService from "../services/ArticleService.js";

export default class ArticleController {
  static getArticles = asyncErrorHandler(
    async (
      req: Request<{}, ArticlesResBody, {}, ArticleQuery>,
      res: Response<ArticlesResBody>,
      next: NextFunction
    ) => {
      const request = { ...req.query };
      request.page = req.query.page ? Number(req.query.page) : 1;
      request.size = req.query.size ? Number(req.query.size) : 10;
      const response = await ArticleService.get(request);
      res.status(200).json({
        status: "success",
        ...response,
      });
    }
  );

  static createArticle = asyncErrorHandler(
    async (
      req: Request<{}, ArticleResBody, ArticleReqBody>,
      res: Response<ArticleResBody>,
      next: NextFunction
    ) => {
      const request = { ...req.body };
      const response = await ArticleService.create(request);
      res.status(200).json({
        status: "success",
        ...response,
      });
    }
  );

  static getArticleById = asyncErrorHandler(
    async (
      req: Request<ArticleParams, ArticleResBody>,
      res: Response<ArticleResBody>,
      next: NextFunction
    ) => {
      const request = { ...req.params };
      request.id = Number(req.params.id);
      const response = await ArticleService.getOne(request);
      res.status(200).json({
        status: "success",
        ...response,
      });
    }
  );

  static updateArticleById = asyncErrorHandler(
    async (
      req: Request<ArticleParams, ArticleResBody, ArticleReqBody>,
      res: Response<ArticleResBody>,
      next: NextFunction
    ) => {
      const request = { params: { ...req.params }, body: { ...req.body } };
      console.log(req.body);
      console.log({ request });
      request.params.id = Number(req.params.id);
      const response = await ArticleService.update(request);
      res.status(200).json({
        status: "success",
        ...response,
      });
    }
  );
}
