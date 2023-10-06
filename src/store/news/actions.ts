import { AnyAction } from "redux"
import { IStore } from "./types"
import { ThunkAction } from "redux-thunk"
import { ThunkDispatch } from "redux-thunk";

import getNews from "services/getNews"

export const setNewsAction = (articles: IStore['articles']) => {
  return {
    type: 'news/setNews',
    payload: articles
  }
}

export const loadNews = () : ThunkAction<void, IStore, null, AnyAction> => async  (dispatch: ThunkDispatch<IStore, null, AnyAction>) => {
  try {
    const news: IStore = await getNews()
    dispatch(setNewsAction(news.articles))
  } catch (error) {
    console.log(error, 'ууупс, произошла ошибка')
  }
}