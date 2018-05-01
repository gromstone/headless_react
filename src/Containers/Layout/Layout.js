import React, { Component } from "react";

import Header from "../../Components/Header/index.js";
import Content from "../../Components/Content/index.js";
import Footer from "../../Components/Footer/index.js";
import Nav from "../../Components/Navigation/index.js";

class Layout extends Component {
  state = {};

  render() {
    return (
      <div>
        <Nav/>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Layout;
