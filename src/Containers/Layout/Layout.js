import React, { Component } from "react";

import { ThemeProvider } from "styled-components";
import { amazon, coolblue, airbnb } from '../../utils/themes';

import Header from "../../Components/Header/Header.js";
import Content from "../../Components/Content/Content.js";
import Footer from "../../Components/Footer/Footer.js";

import Button from "../../Components/Button/Button.js";

class Layout extends Component {
  state = {};

  render() {
    return (
      <ThemeProvider theme={airbnb}>
        <div className='flex__container'>
          <Header />
          <Content>
            <Button
              active={false}
              size={'md'}
              color={'primary'}
              children={'I\'m a link'}
              href={'google.com'}
            />
            <Button
              active={false}
              size={'md'}
              color={'primary'}
              children={'I\'m a button'}
            />
          </Content>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default Layout;
