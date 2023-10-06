import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
import DateView from "components/DateView";
import { routeDetail } from "pages/NewsDetailPage";

import { INewsDetail } from "types/INewsDetail";

interface NewsElementParams {
  element: INewsDetail,
  getPositionOnClick: () => void
}

const NewsElement: React.FC<NewsElementParams> = ({
  element,
  getPositionOnClick
}) => {

  return (
    <NavLink to={routeDetail(element._id)} className="newslist_item" onClick={getPositionOnClick}>
      <p className="newslist_title">{element.title}</p>
      <div className="newslist_bottom">
        <span className="newslist_bottom_link">{element.clean_url}</span>
        <DateView published_date={element.published_date}/>
      </div>
    </NavLink>
  )
}

export default NewsElement;