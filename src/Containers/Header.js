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
    //console.log(this.state.collapse);
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  clickHandler(){
    //console.log(this.state.collapse);
    this.setState({
      collapsed: false
    })
  }

  render(){
    const collapsed = this.state.collapsed;

    return (
      <FlexContainer tag={'header'} className='header'>
        <Navbar>
          <NavToggle style={{display: this.state.collapsed ? 'none' : 'block' }} onClick={this.toggleHandler}/>

          <NavBrand>
            Logo
          </NavBrand>
          <Collapse isOpen={this.state.collapsed} navbar aria-expanded={ this.state.collapsed ? true : false }>
            <NavbarUl left>
              <Navquery onClick={this.clickHandler}/>
            </NavbarUl>
          </Collapse>

        </Navbar>
        { collapsed }
      </FlexContainer>
    )
  }
}

export default Header;
