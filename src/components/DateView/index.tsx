import React from "react";
import prepareDate from "utils/prepareDate";
import './index.css';

interface DateViewParams {
  published_date: string
}

const DateView: React.FC<DateViewParams> = ({published_date}) => {
  const {day, month} = prepareDate(published_date)
  return (
    <div className="newslist_bottom_right">
      <span className="newslist_bottom_day">{day} / </span>
      <span className="newslist_bottom_month">{month}</span>
    </div>
  )
}
export default DateView