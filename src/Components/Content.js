import React from "react";
import { FlexContainer, Row, Col } from './FlexGrid'

const Content = (props) => (
  <Row>
    <aside className='flex__col--xs-2'>MENU</aside>
    <Col xs={10}>
      CONTENT
      { props.children }
    </Col>
  </Row>
);

export default Content;
