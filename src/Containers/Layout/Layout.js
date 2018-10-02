import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

//import { ThemeProvider } from "styled-components";
//import { amazon, coolblue, airbnb } from '../../utils/themes';

import Header from "../../Components/Header/Header.js";
import Content from "../../Components/Content/Content.js";
import Footer from "../../Components/Footer/Footer.js";

import Button from "../../Components/Button/Button.js";

class Layout extends Component {

  render() {
    return (
        <main className='flex__container'>
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
        </main>
    );
  }
}

export default Layout;
