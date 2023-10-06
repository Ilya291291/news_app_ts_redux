import React, {useEffect} from "react";
import NewsElement from "./components/NewsElement";

import { INewsDetail } from "types/INewsDetail";

import { setScrollPosition } from "store/scroll/actions";
import { useDispatch, useSelector } from 'react-redux';
import { selectScroll } from 'store/scroll/selectors';


interface NewsListParams {
  news: INewsDetail[]
}

const NewsList: React.FC<NewsListParams> = ({news}) => {

  const dispatch = useDispatch()

  const scrollPosition = useSelector(selectScroll)

  const getPositionOnClick = () => {
    const scrollPos = window.scrollY
    dispatch(setScrollPosition(scrollPos))
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    scrollPosition && window.scrollTo({
      top: Number(scrollPosition),
      behavior: 'smooth'
    })
  }, [scrollPosition])

  const newsElements = news.map((element : INewsDetail) => {        
    return <NewsElement
               key={element._id} 
               element={element}
               getPositionOnClick={getPositionOnClick}
            />
    })

  return (
    <div className="newslist_content">
      {newsElements}
    </div>
  )
}

export default NewsList