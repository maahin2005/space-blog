import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainHome from '../Pages/MainHome';
import SingleBlog from '../Pages/SingleBlog';
import AllBlogs from '../Pages/AllBlogs';
import About from '../Pages/About';

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainHome />} />
      <Route path="/blogs" element={<AllBlogs />} />
      <Route path="/about" element={<About />} />
      <Route path="blogs/:blog" element={<SingleBlog />} />
    </Routes>
  );
}

export default PublicRoutes;
