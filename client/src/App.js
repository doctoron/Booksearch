import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Search from "./pages/Search/Search";
import Saved from "./pages/Saved";
import Home from "./pages/Home";
import Modal from "./components/Modal/Modal";
import Nav from "./components/Nav";
import LibraryPic from "./images/LibraryOfCongress.jpg";

const backgroundStyles = {
  backgroundImage: `url(${LibraryPic})`
};

class App extends Component {
  state = {
    name: ""
  };
  getUserInfo() {
    this.setState({
      name: "",
      password: ""
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Header style={backgroundStyles}/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/search" component={Search} />
              <Route path="/saved" component={Saved} />
              <Route path="/modal" component={Modal} />
              <Route component={Error} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
