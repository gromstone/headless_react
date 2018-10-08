import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

//import { ThemeProvider } from "styled-components";
//import { amazon, coolblue, airbnb } from '../../utils/themes';

import { FlexContainer } from '../Components/FlexGrid'
import Header from "../Components/Header";
import Content from "../Components/Content";
import Footer from "../Components/Footer";

import Card from '../Components/Card';
import { CardHeader, CardFooter, CardBody, CardContent, CardImg } from '../Components/CardElements';

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
              <Card>
                <CardImg cascade src="https://images.freeimages.com/images/large-previews/1ad/tractor-2-1386664.jpg" />
                <CardBody cascade>
                  <Button
                    active={false}
                    size={'sm'}
                    color={'primary'}
                    children={'I\'m a button'}
                  />
                </CardBody>
              </Card>
            </Content>
          </Switch>
          <Footer />
        </FlexContainer>
    );
  }
}

export default Layout;
