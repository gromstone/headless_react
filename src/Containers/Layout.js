import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

//import { ThemeProvider } from "styled-components";
//import { amazon, coolblue, airbnb } from '../../utils/themes';

import { FlexContainer, Row, Col } from '../Components/FlexGrid'
import Header from "../Containers/Header";
import Content from "../Containers/Content";
import Footer from "../Containers/Footer";

import { Flipper } from '../Components/StyleElements';
import Card from '../Components/Card';
import { CardHeader, CardImg, CardTitle, CardBody, CardContent, CardFooter } from '../Components/CardElements';

import Button from "../Components/Button";

class Layout extends Component {
  state = {
    flipped: false
  }
  flippedhHandler = this.flippedhHandler.bind(this)

  flippedhHandler(){
    this.setState({flipped: !this.state.flipped})
  }

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
              <Row>
                <Col auto />
                <Col sm={4} >
                  <Flipper flipped={this.state.flipped} onClick={this.flippedhHandler}>
                    <Card personal className="face front">
                      <CardImg top className={'img-fluid'} alt="tractor image" src="https://images.freeimages.com/images/large-previews/1ad/tractor-2-1386664.jpg" />
                      <CardBody>
                        <CardContent>
                          January's a great month to visit San Diego! (So are all the other months.) Want a list of every beach you can comfortably bask on in the middle of "winter?".
                        </CardContent>
                        <p>click card to rotate</p>
                      </CardBody>
                    </Card>
                    <Card personal className="face back">
                      <CardBody>
                        <h4>About Me</h4>
                        <hr className="hr-underline"/>
                        <CardContent>
                          January's a great month to visit San Diego! (So are all the other months.) Want a list of every beach you can comfortably bask on in the middle of "winter?".
                        </CardContent>
                      </CardBody>
                    </Card>
                  </Flipper>
                </Col>
                <Col auto />
              </Row>
            </Content>
          </Switch>
          <Footer />
        </FlexContainer>
    );
  }
}

export default Layout;
