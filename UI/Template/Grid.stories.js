import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, boolean, number } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { FlexContainer, Col } from '../../src/Components/FlexGrid';
import Row from '../../src/Components/Grid/Row';

storiesOf('Template/Grid', module)
  .add('Flex Grid', () =>
  <FlexContainer>
    <Row>
      <Col sm={4} className={''}> Col 1 'sm-4'</Col>
      <Col sm={4} className={''}> Col 2 'sm-4'</Col>
      <Col sm={4} className={''}> Col 3 'sm-4'</Col>
    </Row>
    <Row>
      <Col sm={3} className={''}> Col 1 'sm-3'</Col>
      <Col sm={3} className={''}> Col 2 'sm-3'</Col>
      <Col sm={3} className={''}> Col 3 'sm-3'</Col>
      <Col sm={3} className={''}> Col 4 'sm-3'</Col>
    </Row>
  </FlexContainer>
);
