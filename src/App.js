import logo from './logo.svg';
import './App.css';
import Signup from './components/signup';
import Front from './components/front';
import Profile from './components/profile';
import AddArticle from './components/addArticle';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Outlet,Link } from 'react-router-dom';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import Blogpost from './components/blogpost';
import Footer from './components/footer';
import Login from './components/login';
import BlogCard from './components/blogcard';

  function App() {
    const[blogs,setBlogs]=useState([]);
  // <--------------------------------------All blogs Request--------------------------------------------->
  const getblogs=async()=>
  {
  const blogRequest=await axios.get('http://192.168.7.238:3000/article/show');
  setBlogs(blogRequest.data);
  
  }
  
  // <--------------------------------------Use Effects calls--------------------------------------------->
  useEffect(()=>{getblogs();},[]);
  // console.log(blogs);
  return (
   
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Front Blogs={blogs} />} />
        <Route path="/logup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
        {/* <Route path="/showall" element={<Showall/>} /> */}
        <Route path="/addArticle" element={<AddArticle/>} />
        <Route exact path="/blogpost/:blogid" element={<Blogpost Blogs={blogs}/>} />
        
      </Routes>
     </BrowserRouter> 
     
</div>
    
  );
}

export default App;

