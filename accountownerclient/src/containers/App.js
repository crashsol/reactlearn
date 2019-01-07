import React, { Component } from "react";
import Layout from "../components/Layout/layout";
import Home from "../components/Home/Home";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Layout>
        <Home />
      </Layout>
    );
  }
}

export default App;
