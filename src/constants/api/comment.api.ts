import { BASE_URL } from "./base.api";

export const POST_COMMENT_URL = BASE_URL + "api/comment"
export const GET_ALL_COMMENTS_URL = (articleId: string) => BASE_URL + `api/comment/all/article/${parseInt(articleId)}`
export const COUNT_COMMENTS_URL = (articleId: string) => BASE_URL + `api/comment/count/article/${parseInt(articleId)}`