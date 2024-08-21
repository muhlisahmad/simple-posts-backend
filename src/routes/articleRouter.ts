import express from "express";
import ArticleController from "../controllers/ArticleController.js";

const router = express.Router();

router
  .route("/")
  .get(ArticleController.getArticles)
  .post(ArticleController.createArticle);

router
  .route("/:id")
  .get(ArticleController.getArticleById)
  .patch(ArticleController.updateArticleById);

export default router;
