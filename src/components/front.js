// import logo from './logo.svg';
import '../App.css';
import React, { useEffect } from 'react';
import Navbar from './navbar';
import Crousal from './crousal';
import Footer from './footer';
import Pagination from './pagination';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Outlet,Link } from 'react-router-dom';
import Library from './library';
import BlogCard from './blogcard';

function Front({Blogs}) {
  // console.log(Blogs)
  // useEffect(()=>{console.log(Blogs[0].title)},[]);

  // let test=[1,2,3,4,5,6];
  return (
   
    <div>
      <Navbar/>
      <Library/>
      <Crousal/>
      <div class='flex flex-wrap justify-center items-center flex-row mx-8 my-4 '> 
      {Blogs.length>0?(
        <BlogCard title={Blogs[0].title} img={Blogs[0].image_url} id={Blogs[0].id}  text={Blogs[0].text}  name={Blogs[0].user.name} description={Blogs[0].user.description} avatar_url={Blogs[0].user.avatar_url} categories={Blogs[0].categories} /> 
       
      
      ):('')}
     {Blogs.length>0?(
        <BlogCard title={Blogs[1].title} img={Blogs[1].image_url} id={Blogs[1].id} text={Blogs[1].text} name={Blogs[1].user.name} description={Blogs[1].user.description} avatar_url={Blogs[1].user.avatar_url} categories={Blogs[1].categories}/> 
       
      
      ):('')}
       {Blogs.length>0?(
        <BlogCard title={Blogs[2].title} img={Blogs[2].image_url}  id={Blogs[2].id} text={Blogs[2].text} name={Blogs[2].user.name} description={Blogs[2].user.description} avatar_url={Blogs[2].user.avatar_url} categories={Blogs[2].categories}/> 
       
      
      ):('')}
       {Blogs.length>0?(
        <BlogCard title={Blogs[3].title} img={Blogs[3].image_url} id={Blogs[3].id} text={Blogs[3].text} name={Blogs[3].user.name} description={Blogs[3].user.description} avatar_url={Blogs[3].user.avatar_url} categories={Blogs[3].categories}/> 
       
      
      ):('')}
       {Blogs.length>0?(
        <BlogCard title={Blogs[4].title} img={Blogs[4].image_url} id={Blogs[4].id} text={Blogs[4].text} name={Blogs[4].user.name} description={Blogs[4].user.description} avatar_url={Blogs[4].user.avatar_url} categories={Blogs[4].categories} /> 
       
      
      ):('')}
    
      
      </div >
    
      <Pagination/>
   
       <Footer/>
    
</div>
    
  );
}

export default Front;

