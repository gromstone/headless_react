import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

//import { ThemeProvider } from "styled-components";
//import { amazon, coolblue, airbnb } from '../../utils/themes';

import { FlexContainer } from '../Components/FlexGrid'
import Header from "../Components/Header";
import Content from "../Components/Content";
import Footer from "../Components/Footer";

import Button from "../Components/Button";

class Layout extends Component {

  render() {
    return (
        <FlexContainer fluid>
          {/*
              <ThemeProvider theme={airbnb}></ThemeProvider>
          */}
          <Header />
          <Switch>
            <Content>
              {/*
                  <Route exact path="/about" component={About} />
              */}
              <Button
                active={false}
                size={'sm'}
                color={'primary'}
                children={'I\'m a link'}
                href={'google.com'}
              />
              <Button
                active={false}
                size={'sm'}
                color={'primary'}
                children={'I\'m a button'}
              />
              <Button
                active={false}
                size={'md'}
                color={'primary'}
                children={'I\'m a button'}
              />
              <Button
                active={false}
                size={'lg'}
                color={'primary'}
                children={'I\'m a button'}
              />
            </Content>
          </Switch>
          <Footer />
        </FlexContainer>
    );
  }
}

export default Layout;
