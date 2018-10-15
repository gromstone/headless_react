import React from "react";

import { NavbarUl, NavLi, NavLink } from '../NavElements';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const Link = ({ data: { loading, error, navigations } }) => {
    if (error) return <h1>Error fetching the post!</h1>
    if (!loading) {
        return(
            <NavbarUl>
              { navigations[0].linkName.map((link) => (
                <NavLi key={link}>
                  <NavLink
                    exact
                    to={link ==='Home' ? '/' : `/${link}`}
                    className='nav__link btn--flat'
                    activeClassName='nav__link--isActive'
                  >
                    {link}
                  </NavLink>
                </NavLi>
              )) }
            </NavbarUl>
        )
    }

    return <h2>Loading post...</h2>
}

export const linksQuery = gql`
    query {
      navigations {
        linkName
      }
    }
`
export default graphql(linksQuery, {})(Link)
