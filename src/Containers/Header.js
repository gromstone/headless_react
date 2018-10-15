import React from "react";
import { Navbar, NavBrand, NavToggle, Navquery, NavUl, NavLi } from '../Components/NavElements';

const Header = () => {
  return (
    <div className='header flex__row'>
      <Navbar>
        <NavToggle />
        <NavUl>
          <NavLi> <a href="/other">Other link</a></NavLi>
          <NavLi> <a href="/another">Another link</a></NavLi>
          <NavLi> <a href="/more">And Another link</a></NavLi>
        </NavUl>
        <NavBrand>
          Logo
        </NavBrand>
        <Navquery/>
      </Navbar>
    </div>
  )
};
export default Header;
