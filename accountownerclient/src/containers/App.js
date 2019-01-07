import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout/layout";
import Home from "../components/Home/Home";
import NotFound from "../components/ErrorPages/NotFound/NotFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      /*  * 添加浏览器路由模块  */
      <BrowserRouter>
        <Layout>
          {/* 定义路由，当精确匹配到/ ，使用Home Component */}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/404" exact component={NotFound} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
