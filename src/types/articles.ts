import { Post } from "@prisma/client";
import { BaseResponse } from "./response.js";
import { Paging } from "./page.js";

export interface ArticleParams {
  id: number;
}

export interface ArticleReqBody
  extends Omit<Post, "id" | "created_date" | "updated_date"> {}

export interface ArticlesResBody extends BaseResponse {
  data: Omit<Post, "id" | "created_date" | "updated_date">[];
  paging: Paging;
}

export interface ArticleResBody extends BaseResponse {
  data: Omit<Post, "id" | "created_date" | "updated_date">;
}
