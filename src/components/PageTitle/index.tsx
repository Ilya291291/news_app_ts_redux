import React from "react";
import "./index.css";

interface PageTitleParams {
  title: JSX.Element
}

const PageTitle: React.FC<PageTitleParams> = ({title}) => {
  return (
    <>{title}</>
  )
}

export default PageTitle