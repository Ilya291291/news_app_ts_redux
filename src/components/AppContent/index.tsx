import './index.css'
import {Routes, Route, Navigate} from 'react-router-dom';
import Header from 'components/Header';
import MainPage, {routeMain} from 'pages/MainPage';
import NewsListPage, {routeNewsList} from 'pages/NewsListPage';
import Contacts, {routeContacts} from 'pages/ContactsPage';
import NewsDetail, {routeDetail} from 'pages/NewsDetailPage';
import Footer from 'components/Footer';

function AppContent() {

  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path={routeMain()} element={<MainPage />}></Route>
        <Route path={routeNewsList()} element={<NewsListPage />}></Route>
        <Route path={routeDetail()} element={<NewsDetail />}></Route>
        <Route path={routeContacts()} element={<Contacts />}></Route>
        <Route path="*" element={<Navigate to="/" replace />}/>
      </Routes>
      <Footer />
    </div>  
  )
}

export default AppContent;
