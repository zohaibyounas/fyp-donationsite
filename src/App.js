import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Card from "./components/heroSection/Card";
import VideoPortion from "./components/heroSection/VideoPortion";
import About from "./components/heroSection/About";
import WhatWeDo from "./components/heroSection/WhatWeDo";
import Blogs from "./components/heroSection/Blogs";
import BlogDetail from "./components/heroSection/BlogDetail";
import Main from "./components/heroSection/Main";
import Contact from "./components/heroSection/Contact";
import Footer from "./components/heroSection/Footer";
import VcImg from './components/assest/vc.jpeg';
import HodImg from './components/assest/images4.jpg';
import Superviser from './components/assest/sir.png';
import DrSijad from './components/assest/img5.png';
import DrJameel from './components/assest/img6.jpg';
import DrTauseef from './components/assest/img7.jpg';
import Form from "./components/Form";
import SignUp from "./components/SignUp";

const blogs = [
  { id: 1, image: VcImg, location: 'Peshawar, KPK', title: 'Title 1', content: 'Content for blog 1', date: '15 Jan, 2024' },
  { id: 2, image: HodImg, location: 'Peshawar, KPK', title: 'Title 2', content: 'Content for blog 2', date: '15 Jan, 2024' },
  { id: 3, image: Superviser, location: 'Peshawar, KPK', title: 'Title 3', content: 'Content for blog 3', date: '15 Jan, 2024' },
  { id: 4, image: DrSijad, location: 'Peshawar, KPK', title: 'Title 4', content: 'Content for blog 4', date: '15 Jan, 2024' },
  { id: 5, image: DrJameel, location: 'Peshawar, KPK', title: 'Title 5', content: 'Content for blog 5', date: '15 Jan, 2024' },
  { id: 6, image: DrTauseef, location: 'Peshawar, KPK', title: 'Title 6', content: 'Content for blog 6', date: '15 Jan, 2024' },
];

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div>
            <div id="main">
              <Main />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="what-we-do">
              <WhatWeDo />
            </div>
            <div id="contact">
              <Contact />
            </div>
            <Card
              className="flex items-center bg-gray-100"
              title="Card Title"
              text="When trying to reach, engage, and convert donors, an optimized donation page is essential.
               It’s the foundation of your online fundraising strategy and the place donors will go when,
               they feel compelled to give. But if making their donation is difficult or disjointed. When
                trying to reach, engage, and convert donors, an optimized donation page is essential. 
                It’s the foundation of your online fundraising strategy and the place donors will go when,
                 they feel compelled to give. But if making their donation is difficult or disjointed."
              buttonText="Click Me"
            />
            <VideoPortion />
            <Blogs blogs={blogs} />
          </div>
        } />
        <Route path="/blogs/:id" element={<BlogDetail blogs={blogs} />} />
        <Route path="/form" element={<Form />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
