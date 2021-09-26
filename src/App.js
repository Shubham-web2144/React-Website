import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./componant/Home";
import Project from "./componant/Project";
import Contact from "./componant/Contact";
import About from "./componant/About";
import "./App.css";
import "./componant/style.css";
import Footer from "./componant/Footer";

function App() {

const onShowPage = (e) => {

}

  return (
    <div className="app">
      <Router>
        {/* heaader */}
        <div className="header">
          {/* logo */}
          <div className="header_logo">logo</div>
          {/* menu */}
          <div className="header_menu">
            <Link to="/">Home</Link>
            <Link to="/project">Project</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
          </div>

          {/* contact btn */}
          <button className="header_btn">
            <Link to="/contact">Contact</Link>
          </button>
        </div>
        {/* Home */}
        {/* Project */}
        {/* Contact */}
        {/* About */}
        {/* Footer */}

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
