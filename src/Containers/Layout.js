import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//import { ThemeProvider } from "styled-components";
//import { amazon, coolblue, airbnb } from '../../utils/themes';

import Aux from "../hoc/aux";

import Header from "../Containers/Header";
import Footer from "../Containers/Footer";

import { Home, Blog, Contact } from '../Components/Views';

import { FlexContainer } from '../Components/FlexGrid';

class Layout extends Component {

  render() {
    return (
      <Router>
        <Aux>
          {/*
            <ThemeProvider theme={airbnb}></ThemeProvider>
          */}
          <Header />

          <FlexContainer fluid tag={'main'}>
            <Route exact path="/" component={Home} />
            <Route path="/Blog" component={Blog} />
            <Route path="/Contact" component={Contact} />
          </FlexContainer>
          {/*
            <FlexContainer tag={'aside'}>
            Side
            </FlexContainer>
          */}
          <Footer />
        </Aux>
      </Router>
    );
  }
}

export default Layout;
