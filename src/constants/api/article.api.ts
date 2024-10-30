import { BASE_URL } from "./base.api";

export const ALL_ARTICLE_URL = BASE_URL + "api/article/all"
export const ARTICLE_BY_ID_URL = (articleId: string) => BASE_URL + `api/article/${articleId}`