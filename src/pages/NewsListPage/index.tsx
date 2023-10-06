import "./index.css"
import React, { useEffect } from "react";
import routeNewsList from "./route";
import PageTitle from "components/PageTitle";
import NewsList from "components/NewsList";

import { useDispatch, useSelector } from "react-redux";
import { loadNews } from "store/news/actions";
import { selectList } from "store/news/selectors";

import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { IStore } from "store/news/types";


const NewsListPage = () => {

  const dispatch: ThunkDispatch<IStore, null, AnyAction> = useDispatch()
  const news = useSelector(selectList)

  useEffect(() => {
    dispatch(loadNews())
  }, [])

  return (
  <div className="newslist_container">
    <PageTitle 
      title={
        <h1 className="newslist_heading">Быть<br /> 
          в курсе 
          <span className="blue-color"> событий</span>
        </h1>
      }
    />
      {news.length > 0 && <NewsList news={news}/>}
  </div>
  )
}

export { routeNewsList }

export default NewsListPage