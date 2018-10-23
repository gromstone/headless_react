import React from 'react';

import Aux from '../../hoc/aux';
import { HeaderHero, Jumbotron } from '../StyleElements';
import { Row, Col } from '../FlexGrid';
import { CardBody } from '../CardElements';
//import { Card, CardHeader, CardImg, CardTitle, CardBody, CardContent, CardFooter } from '../CardElements';

// state = {
//   flipped: false
// }
// flippedhHandler = this.flippedhHandler.bind(this)
//
// flippedhHandler(){
//   this.setState({flipped: !this.state.flipped})
// }

const Home = (props) => (
  <Aux>
    <HeaderHero
      home
      bgcolor={'secondary'}
    />
    <Jumbotron flyby>
      <Row>
        <Col sm={10} className={'ml-auto mr-auto'}>
          <CardBody className="text-center">
            <h1>Deviate Design</h1>
            <p className="lg-copy">Development by David Rodriguez</p>
          </CardBody>
        </Col>
      </Row>
    </Jumbotron>
    <Row>
      <Col sm={12}>
        <CardBody className="ml-auto mr-auto" style={{width: "80%"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </CardBody>
      </Col>
      <Col auto />
      <Col sm={3} >
        <CardBody className="text-center">
          <h5 className="lg-copy">React</h5>
        </CardBody>
      </Col>
      <Col sm={3} >
        <CardBody className="text-center">
          <h5 className="lg-copy">Graphql</h5>
        </CardBody>
      </Col>
      <Col sm={3} >
        <CardBody className="text-center">
          <h5 className="lg-copy">Storybook</h5>
        </CardBody>
      </Col>
      <Col auto />
    </Row>

  </Aux>
);

export default Home;
