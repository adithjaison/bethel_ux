import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About/About";
import Layout from "./components/layouts/Layout/Layout";
import Sermons from "./components/pages/Sermons/Sermons";
import Ministries from "./components/pages/Ministries/Ministries";
import Events from "./components/pages/Events/Events";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
