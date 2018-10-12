import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { FlexContainer, Row, Col } from '../../src/Components/FlexGrid';

import { Mask, View } from '../../src/Components/StyleElements';

storiesOf('Atom/Overlays', module)
  .add('Overlays w/knobs', () =>
    <FlexContainer>
      <Row>
        <Col auto />
        <Col sm={6} >
          <h2>Color Overlay</h2>
          <View>
            <img src="https://www.gstatic.com/webp/gallery/1.jpg" alt="Sample" className="img-fluid"/>
            <Mask overlay={text('Color Overlay','white-shine')}></Mask>
          </View>
        </Col>
        <Col auto />
      </Row>
      <Row>
        <Col auto />
        <Col sm={6} >
          <h2>Pattern Overlay</h2>
          <View>
            <img src="https://www.gstatic.com/webp/gallery/1.jpg" alt="Sample" className="img-fluid"/>
            <Mask pattern={number('Pattern Number', 1)}></Mask>
          </View>
        </Col>
        <Col auto />
      </Row>
    </FlexContainer>
  )
