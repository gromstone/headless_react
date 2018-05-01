import React, { Component } from "react";

import Header from "../../Components/Header/index.js";
import Content from "../../Components/Content/index.js";
import Footer from "../../Components/Footer/index.js";

class Layout extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default Layout;
