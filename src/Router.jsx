import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import AboutPage from "./_pages/AboutPage";
import ContactPage from "./_pages/ContactPage";
import StartPage from "./_pages/start/StartPage";
import PostPage from "./_pages/posts/PostsPage";

const basename = process.env.PUBLIC_URL;

export default function Router() {
  return (
    <BrowserRouter>
      <nav>
          <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/blog/'><h1 class="title">이새힘 Iirin</h1></NavLink><br/>
          <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/blog/about'>👀 About</NavLink><br/>
          <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/blog/post'>📋 Posts</NavLink><br/>
      </nav>

      <Routes>
        <Route path='/blog/start' element={<StartPage />} />
        <Route path='/blog/about' element={<AboutPage/>}/>
        <Route path='/blog/post' element={<PostPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}