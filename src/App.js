import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import "@material-tailwind/react/tailwind.css";

import Header from "./components/Header";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/profile" element={<Profile />} />
        <Route exact={true} path="/contact" element={<Contact />} />
        <Route exact={true} path="/projects" element={<Projects />} />

        {/* <Route render={() => <h1 className="display-2">Wrong page!</h1>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
