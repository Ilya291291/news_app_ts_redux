import { IStore } from "./types"
import { INewsDetail } from "types/INewsDetail"

export const selectList = (state: {newsReducer: IStore}) => state.newsReducer.articles