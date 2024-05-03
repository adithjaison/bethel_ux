import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About/About";
import Layout from "./components/layouts/Layout/Layout";
import Sermons from "./components/pages/Sermons/Sermons";
import Ministries from "./components/pages/Ministries/Ministries";
import Events from "./components/pages/Events/Events";
import Blog from "./components/pages/Blog/Blog";
import Contact from "./components/pages/Contact/Contact";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout Page={Home} />} exact />
            <Route path="/about" element={<Layout Page={About} />} exact />
            <Route path="/sermons" element={<Layout Page={Sermons} />} exact />
            <Route path="/ministries" element={<Layout Page={Ministries} />} exact />
            <Route path="/events" element={<Layout Page={Events} />} exact />
            <Route path="/blog" element={<Layout Page={Blog} />} exact />
            <Route path="/contact" element={<Layout Page={Contact} />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
