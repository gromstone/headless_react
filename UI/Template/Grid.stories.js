import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, boolean, number } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { FlexContainer, Row, Col } from '../../src/Components/FlexGrid';

storiesOf('Template/Grid', module)
  .add('Flex Grid', () =>
  <FlexContainer style={{textAlign:"center"}}>
    <h3>Flex Grid</h3>
    <Row>
      <Col sm={4} className={''} style={{border:"1px solid #d8d8d8"}}> Col 1 'sm-4'</Col>
      <Col sm={4} className={''} style={{border:"1px solid #d8d8d8"}}> Col 2 'sm-4'</Col>
      <Col sm={4} className={''} style={{border:"1px solid #d8d8d8"}}> Col 3 'sm-4'</Col>
    </Row>
    <Row>
      <Col sm={3} className={''} style={{border:"1px solid #d8d8d8"}}> Col 1 'sm-3'</Col>
      <Col sm={3} className={''} style={{border:"1px solid #d8d8d8"}}> Col 2 'sm-3'</Col>
      <Col sm={3} className={''} style={{border:"1px solid #d8d8d8"}}> Col 3 'sm-3'</Col>
      <Col sm={3} className={''} style={{border:"1px solid #d8d8d8"}}> Col 4 'sm-3'</Col>
    </Row>
    <Row>
      <Col sm={5} className={''} style={{border:"1px solid #d8d8d8"}}> Col 1 'sm-5'</Col>
      <Col sm={2} className={''} style={{border:"1px solid #d8d8d8"}}> Col 2 'sm-2'</Col>
      <Col sm={5} className={''} style={{border:"1px solid #d8d8d8"}}> Col 3 'sm-5'</Col>
    </Row>
    <Row>
      <Col sm={1} style={{padding: '0', border:"1px solid #d8d8d8"}}> Col 1 'sm-1'</Col>
      <Col sm={1} style={{padding: '0', border:"1px solid #d8d8d8"}}> Col 2 'sm-1'</Col>
      <Col sm={1} style={{padding: '0', border:"1px solid #d8d8d8"}}> Col 3 'sm-1'</Col>
      <Col sm={1} style={{padding: '0', border:"1px solid #d8d8d8"}}> Col 4 'sm-1'</Col>
      <Col sm={1} style={{padding: '0', border:"1px solid #d8d8d8"}}> Col 5 'sm-1'</Col>
      <Col sm={1} style={{padding: '0', border:"1px solid #d8d8d8"}}> Col 6 'sm-1'</Col>
      <Col sm={1} style={{padding: '0', border:"1px solid #d8d8d8"}}> Col 7 'sm-1'</Col>
      <Col sm={1} style={{padding: '0', border:"1px solid #d8d8d8"}}> Col 8 'sm-1'</Col>
      <Col sm={1} style={{padding: '0', border:"1px solid #d8d8d8"}}> Col 9 'sm-1'</Col>
      <Col sm={1} style={{padding: '0', border:"1px solid #d8d8d8"}}> Col 10 'sm-1'</Col>
      <Col sm={1} style={{padding: '0', border:"1px solid #d8d8d8"}}> Col 11 'sm-1'</Col>
      <Col sm={1} style={{padding: '0', border:"1px solid #d8d8d8"}}> Col 12 'sm-1'</Col>
    </Row>
    <h3>Auto sized columns</h3>
    <Row>
      <Col auto style={{border:"1px solid #d8d8d8", height:'40px'}}> Auto Col 1 'sm-4'</Col>
      <Col auto style={{border:"1px solid #d8d8d8", height:'40px'}}> Auto Col 2 'sm-4'</Col>
      <Col auto style={{border:"1px solid #d8d8d8", height:'40px'}}> Auto Col 3 'sm-4'</Col>
    </Row>
    <Row>
      <Col auto style={{border:"1px solid #d8d8d8", height:'40px'}}> Auto Col 1 'sm-3'</Col>
      <Col auto style={{border:"1px solid #d8d8d8", height:'40px'}}> Auto Col 2 'sm-3'</Col>
      <Col auto style={{border:"1px solid #d8d8d8", height:'40px'}}> Auto Col 3 'sm-3'</Col>
      <Col auto style={{border:"1px solid #d8d8d8", height:'40px'}}> Auto Col 4 'sm-3'</Col>
    </Row>
  </FlexContainer>
);
