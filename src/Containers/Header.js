import React, { Component } from "react";

import { Collapse } from '../Components/StyleElements';
import { FlexContainer } from '../Components/FlexGrid';
import { Navbar, NavBrand, NavToggle, NavbarUl, Navquery } from '../Components/NavElements';

class Header extends Component {

  state = {
    collapsed: false
  }

  toggleHandler = this.toggleHandler.bind(this);
  clickHandler = this.clickHandler.bind(this);

  toggleHandler(){
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  clickHandler(){
    this.setState({
      collapsed: false
    })
  }

  //<Collapse isOpen={this.state.collapsed} navbar aria-expanded={ this.state.collapsed ? true : false }> </Collapse>


  render(){
    const collapsed = this.state.collapsed;

    return (
      <FlexContainer tag={'header'} className='header'>
        <Navbar>
          <NavBrand>
            <img src="https://placeholder.pics/svg/64x64/FF7A37-FFA562/FFFFFF/logo%20small" alt="logo"/>
          </NavBrand>

          <NavbarUl left>
            <Navquery onClick={this.clickHandler}/>
          </NavbarUl>

        </Navbar>
      </FlexContainer>
    )
  }
}

export default Header;
