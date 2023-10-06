import "./index.css";
import React, {useEffect} from "react";
import routeMain from "./route";

import PageTitle from "components/PageTitle";
import NewsList from "components/NewsList";

import { useDispatch, useSelector } from "react-redux";
import { loadNews } from "store/news/actions";
import { selectList } from "store/news/selectors";

import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { IStore } from "store/news/types";

const MainPage = () => {

  const dispatch: ThunkDispatch<IStore, null, AnyAction> = useDispatch()
  const shortNews = useSelector(selectList)

  useEffect(() => {
    dispatch(loadNews())
  }, [])

  return (
    <div className="newslist_container">
      {<PageTitle 
        title={
          <h1 className="newslist_heading">Всегда<br />
            свежие
            <span className="blue-color"> новости</span>
          </h1>
          }
      />}
        {shortNews.length > 0 && <NewsList news={shortNews.slice(0, 6)} />}
    </div>
  )
}


export { routeMain }

export default MainPage