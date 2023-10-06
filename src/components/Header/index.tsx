import React from "react";
import { NavLink } from "react-router-dom";
import {routeMain} from 'pages/MainPage';
import {routeNewsList} from 'pages/NewsListPage';
import {routeContacts} from 'pages/ContactsPage';
import Logo from "assets/img/logo.png";
import "./index.css";

function Header() {
  return (
    <div className="news_wrapper">
      <div className="news_navbar_title">
        <img src={Logo} alt={Logo}/>
      </div>
      <nav className="news_nav">
        <NavLink to={routeMain()}>Домой</NavLink>
        <NavLink to={routeNewsList()}>Новости</NavLink>
        <NavLink to={routeContacts()}>Контакты</NavLink>
      </nav>
    </div>
  )
}
export default Header