import React, { Component } from "react";
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { NavLi, NavLink } from '../Nav';
import Aux from '../../hoc/aux';

class Link extends Component {

  render() {

    return (
      <Query query={linksQuery}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const links = data.navigations[0].linkName;
          return (
            <Aux>
              { links.map((link) => (
                <NavLi key={link}>
                  <NavLink
                    exact
                    to={ link === 'Home' ? '/' : `/${link}` }
                    className='nav__link btn--flat'
                    activeClassName='nav__link--isActive'
                    onClick={this.props.onClick}
                  >
                    <i className={(link === 'Home') ? 'fa fa-home' : (link === 'Blog') ? 'fa fa-commenting' : 'fa fa-envelope'}></i>
                    <span>{ link }</span>
                  </NavLink>
                </NavLi>
              )) }
            </Aux>
          )
        }}
      </Query>
    )
  }
}

export const linksQuery = gql`
    query {
      navigations {
        linkName
      }
    }
`
export default Link
