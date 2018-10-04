import React from "react";

import Navbar from './Navbar';
import NavLink from './NavLink';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const Link = ({ data: { loading, error, navigations } }) => {
    if (error) return <h1>Error fetching the post!</h1>
    if (!loading) {
        return(
            <Navbar>
              { navigations[0].linkName.map((link) => (
                <NavLink
                  key={link}
                  exact
                  to={link ==='Home' ? '/' : `/${link}`}
                  className='nav-link'
                  activeClassName='nav-link--isActive'
                >
                  {link}
                </NavLink>
              )) }
            </Navbar>
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
