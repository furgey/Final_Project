import React, { Component } from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./Home";
import Support from "./Support";
import Contact from "./Contact";
import Games from "./Games"
import App from "./Components/App/App";
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
          <App/>
        <div>
          <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/support" component={Support}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/games" component={Games}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;