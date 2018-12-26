import React, { Component } from 'react';
import { Router, Switch, Route } from "react-router-dom";
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { FlexContainer, Row, Col } from '../../src/Components/FlexGrid';
import Button from '../../src/Components/Button';

import { Flipper } from '../../src/Components/StyleElements';
import { Card, CardHeader, CardColorTop, CardImg, CardTitle, CardBody, CardContent, CardFooter } from '../../src/Components/Card';

  storiesOf('Organism/Card', module)
  .add('Card', () =>
    <FlexContainer fluid>
      <Row>
        <Col sm={4} >
          <Card text={'primary'}>
            <CardBody>
              <CardTitle>
                Card Title
                <hr className="hr-underline"/>
              </CardTitle>
              <CardContent>
                January's a great month to visit San Diego! (So are all the other months.) Want a list of every beach you can comfortably bask on in the middle of "winter?".
              </CardContent>
            </CardBody>
          </Card>
        </Col>
        <Col sm={4} >
          <Card text={'secondary'}>
            <CardBody>
              <CardTitle> Card Title</CardTitle>
              <CardContent>
                January's a great month to visit San Diego! (So are all the other months.) Want a list of every beach you can comfortably bask on in the middle of "winter?".
              </CardContent>
            </CardBody>
          </Card>
        </Col>
        <Col sm={4} >
          <Card text={'optional'}>
            <CardBody>
              <CardTitle> Card Title</CardTitle>
              <CardContent small={true}>
                January's a great month to visit San Diego! (So are all the other months.) Want a list of every beach you can comfortably bask on in the middle of "winter?".
              </CardContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm auto />
        <Col sm={4} >
          <Card blog>
            <CardImg top hover overlay={'white-gleam'} className={'img-fluid'} alt="tractor image" src="https://images.freeimages.com/images/large-previews/1ad/tractor-2-1386664.jpg" />
            <CardBody>
              <CardTitle>
                Card Title
                <hr className="hr-underline"/>
              </CardTitle>
              <CardContent>
                January's a great month to visit San Diego! (So are all the other months.) Want a list of every beach you can comfortably bask on in the middle of "winter?".
              </CardContent>
              <CardFooter>
                <Button
                  active={false}
                  size={'sm'}
                  flat
                  href="https://google.com"
                  children={'Read more...'}
                />
              </CardFooter>
            </CardBody>
          </Card>
        </Col>
        <Col sm auto />
      </Row>
      <Row>
        <Col sm auto />
        <Col sm={4} >
          <Card cascade reverse>
            <CardImg top hover overlay={'white-gleam'} className={'img-fluid'} alt="tractor image" src="https://images.freeimages.com/images/large-previews/1ad/tractor-2-1386664.jpg" />
            <CardBody>
              <CardTitle> Card Title</CardTitle>
              <CardContent>
                January's a great month to visit San Diego! (So are all the other months.) Want a list of every beach you
              </CardContent>
              <hr className="hr-underline"/>
              <CardFooter>
                <Button
                  active={false}
                  size={'sm'}
                  flat
                  href="https://google.com"
                  children={'Read more...'}
                />
              </CardFooter>
            </CardBody>
          </Card>
        </Col>
        <Col sm auto />
      </Row>
      <Row>
        <Col sm auto />
        <Col sm={6} >
          <Card review text={'secondary'} style={{ backgroundImage: "url('https://www.gstatic.com/webp/gallery/1.jpg')"}}>
            <CardBody className={'rgba-blue-bright'}>
              <CardTitle> Card Title</CardTitle>
              <CardContent style={{ color: "#FFF"}}>
                January's a great month to visit San Diego! (So are all the other months.) Want a list of every beach you can comfortably bask on in the middle of "winter?".
              </CardContent>
              <CardFooter>
                <Button
                  active={false}
                  size={'sm'}
                  color={'secondary'}
                  href="/travel"
                  children={'Read Review'}
                />
              </CardFooter>
            </CardBody>
          </Card>
        </Col>
        <Col sm auto />
      </Row>
      <Row>
        <Col sm auto />
        <Col sm={4} >
          <Flipper flipped={boolean('flipped', false)}>
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
        <Col sm auto />
      </Row>
    </FlexContainer>
  );
