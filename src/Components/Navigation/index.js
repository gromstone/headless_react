import React from "react";

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import "../../scss/_navigation.scss";

const Link = ({ data: { loading, error, NavList } }) => {
    if (error) return <h1>Error fetching the post!</h1>
    if (!loading) {
        return (
            <li>
                <a href="/">{NavList.name}</a>
            </li>
        )
    }
    
    return <h2>Loading post...</h2>
}

export const mainNavList = gql`
    query {
      allNavLists {
        linkcolors,linkName
      }
    }
`
//const Navigation = () => <menu>Menu</menu>;

//export default Navigation;

export default graphql(mainNavList, {
  options: ({ match }) => ({
    variables: {
      //slug: match.params.slug
    }
  })
})(Link)
