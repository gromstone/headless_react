import React, { Component } from "react";

import { ThemeProvider } from "styled-components";
import { amazon, coolblue, airbnb } from '../../utils/themes';

import Header from "../../Components/Header/index.js";
import Content from "../../Components/Content/index.js";
import Footer from "../../Components/Footer/index.js";

class Layout extends Component {
  state = {};

  render() {
    return (
      <ThemeProvider theme={airbnb}>
        <div>
          <Header />
          <Content />
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default Layout;
