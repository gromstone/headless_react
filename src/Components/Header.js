import React from "react";
import { Navbar, NavBrand, Navquery, NavUl, NavLi } from './Nav';

const Header = () => {
  return (
    <div className='header flex__row'>
      <Navbar>
        <NavBrand>
          Logo
        </NavBrand>
        <NavUl>
          <NavLi> <a href="#">Other link</a></NavLi>
          <NavLi> <a href="#">Another link</a></NavLi>
          <NavLi> <a href="#">And Another link</a></NavLi>
        </NavUl>
        <Navquery/>
      </Navbar>
    </div>
  )
};
export default Header;