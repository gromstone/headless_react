import React, { Component } from "react";
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import { NavLi, NavLink } from '../NavElements';
import Aux from '../../hoc/aux';

class Link extends Component {

  render() {
    console.log(this.props);
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
                    to={link ==='Home' ? '/' : `/${link}`}
                    className='nav__link btn--flat'
                    activeClassName='nav__link--isActive'
                    onClick={this.onClick}
                  >
                    { link }
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
