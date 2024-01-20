import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import AboutPage from "./_pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import StartPage from "./_pages/start/StartPage";
import PostPage from "./_pages/posts/PostsPage";

export default function Router() {
  return (
    <BrowserRouter>
      <nav>
          <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/'><h1 class="title">이새힘 Iirin</h1></NavLink><br/>
          <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/about'>👀 About</NavLink><br/>
          <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/contact'>📭 Contact</NavLink><br/>
      </nav>

      <Routes>
        <Route path='/' element={<StartPage />} />
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/post' element={<PostPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}