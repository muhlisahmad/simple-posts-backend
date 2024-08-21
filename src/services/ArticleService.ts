import { prisma } from "../database/prisma.js";
import { ArticleParams, ArticleReqBody } from "../types/articles.js";
import { PageQuery } from "../types/page.js";
import ResponseError from "../utils/ResponseError.js";
import { ArticleValidation } from "../validation/ArticleValidation.js";
import { Validation } from "../validation/validation.js";

export default class ArticleService {
  static async get(request: PageQuery) {
    const parsedRequest = Validation.validate(ArticleValidation.GET, request);
    const articles = await prisma.post.findMany({
      select: {
        title: true,
        content: true,
        category: true,
        status: true,
      },
      skip: parsedRequest.page,
      take: parsedRequest.size,
    });

    if (articles.length === 0) {
      throw new ResponseError("No articles found", 404);
    }

    const total_page: number = Math.ceil(articles.length / parsedRequest.size);

    return {
      data: articles,
      paging: {
        page: parsedRequest.page,
        size: parsedRequest.size,
        total_page,
      },
    };
  }

  static async create(request: ArticleReqBody) {
    const parsedRequest = Validation.validate(
      ArticleValidation.CREATE,
      request
    );

    const newArticle = await prisma.post.create({
      data: parsedRequest,
      select: {
        title: true,
        content: true,
        category: true,
        status: true,
      },
    });

    return { data: newArticle };
  }

  static async getOne(request: ArticleParams) {
    const parsedRequest = Validation.validate(ArticleValidation.BY_ID, request);

    const article = await prisma.post.findUnique({
      where: {
        id: parsedRequest.id,
      },
      select: {
        title: true,
        content: true,
        category: true,
        status: true,
      },
    });

    if (!article) {
      throw new ResponseError(
        `Article with ID ${parsedRequest.id} not found`,
        404
      );
    }

    return { data: article };
  }

  static async update(request: {
    params: ArticleParams;
    body: ArticleReqBody;
  }) {
    const parsedRequest = Validation.validate(
      ArticleValidation.UPDATE,
      request
    );

    const findArticle = await prisma.post.findFirst({
      where: {
        id: parsedRequest.params.id,
      },
    });

    if (!findArticle) {
      throw new ResponseError(
        `Article with ID ${parsedRequest.params.id} not found`,
        404
      );
    }

    const updatedArticle = await prisma.post.update({
      where: {
        id: parsedRequest.params.id,
      },
      data: parsedRequest.body,
      select: {
        title: true,
        content: true,
        category: true,
        status: true,
      },
    });

    return { data: updatedArticle };
  }

  static async delete(request: ArticleParams) {
    const parsedRequest = Validation.validate(ArticleValidation.BY_ID, request);

    const article = await prisma.post.findUnique({
      where: {
        id: parsedRequest.id,
      },
      select: {
        title: true,
        content: true,
        category: true,
        status: true,
      },
    });

    if (!article) {
      throw new ResponseError(
        `Article with ID ${parsedRequest.id} not found`,
        404
      );
    }

    const deletedArticle = await prisma.post.delete({
      where: {
        id: parsedRequest.id,
      },
      select: {
        title: true,
        content: true,
        category: true,
        status: true,
      },
    });

    return { data: deletedArticle };
  }
}
