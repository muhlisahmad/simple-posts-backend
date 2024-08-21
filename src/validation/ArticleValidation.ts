import { z, ZodType } from "zod";

export class ArticleValidation {
  static readonly CREATE: ZodType = z.object({
    title: z
      .string()
      .min(20, { message: "Title must be at least 20 characters long." }),
    content: z
      .string()
      .min(200, { message: "Content must be at least 200 characters long." }),
    category: z
      .string()
      .min(3, { message: "Category must be at least 3 characters long." }),
    status: z.enum(["publish", "draft", "thrash"], {
      errorMap: (issue, ctx) => {
        if (issue.code === z.ZodIssueCode.invalid_enum_value) {
          return {
            message: "Status must be one of 'publish', 'draft', or 'thrash'",
          };
        }
        return { message: ctx.defaultError };
      },
    }),
  });

  static readonly BY_ID: ZodType = z.object({
    id: z.number().min(1).positive(),
  });

  static readonly UPDATE: ZodType = z.object({
    params: this.BY_ID,
    body: this.CREATE,
  });

  static readonly GET: ZodType = z.object({
    page: z.number().min(1).positive(),
    size: z.number().min(1).positive(),
  });
}
