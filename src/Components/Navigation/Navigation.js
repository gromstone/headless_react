import React from "react";
import { NavLink } from "react-router-dom";

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const Link = ({ data: { loading, error, allNavLists } }) => {
    if (error) return <h1>Error fetching the post!</h1>
    if (!loading) {
        return(
            <nav className='nav flex__row'>
              {allNavLists.map((link) => (
                <NavLink
                  key={link.id}
                  exact
                  to={link ==='home' ? '/' : `/${link.linkName}`}
                  className='nav-link'
                  activeClassName='nav-link--isActive'
                >
                  {link.linkName}
                </NavLink>
              ))}
            </nav>
        )
    }

    return <h2>Loading post...</h2>
}

export const mainNavList = gql`
    query {
      allNavLists {
        id,linkColors,linkName
      }
    }
`
export default graphql(mainNavList, {})(Link)
