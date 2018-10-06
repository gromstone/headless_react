import React from "react";
//import { Row, Col } from './FlexGrid'
import { Navbar } from './Nav';
import Nav from "./Navigation";

const Header = () => {
  return (
    <div className='header flex__row'>
      <Navbar>
        <Nav/>
      </Navbar>

      HOME

    </div>
  )
};
export default Header;
