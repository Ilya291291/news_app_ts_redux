import "./index.css";
import routeDetail from "./route";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import DateView from "components/DateView";

import { ID }from "types/ID";
import { INewsDetail } from "types/INewsDetail";

import { useSelector } from "react-redux";
import { selectList } from "store/news/selectors";

const NewsDetail = () => {

  const newsArr = useSelector(selectList)

  const [news,setNews] = useState<INewsDetail | undefined>();

  const { id } = useParams<ID>();

  useEffect(() => {
    const thisElem = newsArr.find((element: INewsDetail) => element._id === id)
    setNews(thisElem)
  }, [id, news])

  useEffect(() =>  {
    window.scrollTo(0, 0)
  }, [])

  const titleRest = news?.title ? news.title.split(' ').slice(0, news.title.split(' ').length - 1).join(' ') : "",
    blueClr = news?.title ? news.title.split(' ')[news.title.split(' ').length - 1] : ""

  return (
    <section className="newsdetail_section">
      {news ?
      <div className="newsdetail-wrapper">
        <div className="newsdetail_left">
          <h1 className="newsdetail_left_title">
            {titleRest} 
            <span className="blue-color"> {blueClr}</span>
          </h1>
          <span className="newsdetail_source">{news.clean_url}</span>
          <DateView published_date={news.published_date}/>
        </div>
        <div className="newsdetail_right">
          <img className="newsdetail_right_img" src={news.media} alt={news.title} />
          <p className="newsdetail_right_summary">{news.summary}</p>
        </div>
      </div>
      : <></>}
  </section>
  )
}

export { routeDetail }

export default NewsDetail
