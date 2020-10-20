import React, { useEffect, useState } from 'react';
import './App.css';
import './Styles/Chat.css'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"; 
import Home from './pages/Home.js'
import News from './pages/News.js'
import Men from './pages/Men.js'
import Women from './pages/Women.js'
import Contact from './pages/Contact.js'
import ProductDetail from './pages/ProductDetail.js'
import Collection from './pages/Collection';
import NewsDetail from './pages/NewsDetail';
import OpenChatBtn from './components/OpenChatBtn';
import NewsCate from './pages/NewsCate';


import Login from './components/admin/Login/Login';

import { CartProvider } from './contexts/Cart'
import Dashboard from './components/admin/Dashboard/Dashboard';
import { UserProvider } from './contexts/User';
import { ChatProvider } from './contexts/Chat';

import { ToastContainer } from 'react-toastify';
import LoadingPage from './components/LoadingPage';

function App(props) {

  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false)
      document.body.style.overflow = 'unset';
    }, 5000)
  },[])

  if(loading){
    document.body.style.overflow = 'hidden';
  }

  return (
    <UserProvider>
    <CartProvider>
    <ChatProvider>
      <LoadingPage
        loading={loading}
      />
      <Router>
        <div className="App">
          <ToastContainer/>
          <Route path="/" exact component={Home}></Route>
          <Route path="/news" exact component={News}></Route>
          <Route path="/men" exact component={Men}></Route>
          <Route path="/women" exact component={Women}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route path="/collection" exact component={Collection}></Route>
          <Route path="/products/:id" exact component={ProductDetail}></Route>
          <Route path="/news/:id" exact component={NewsDetail}></Route>
          <Route path="/news/category/:cate" exact component={NewsCate}></Route>
          <Route path="/admin" exact component={Login}></Route>
          <Route path="/admin/dashboard" exact component={Dashboard}></Route>
        </div>
        <OpenChatBtn/>
      </Router>
    </ChatProvider>
    </CartProvider>
    </UserProvider>
  );
}

export default App;