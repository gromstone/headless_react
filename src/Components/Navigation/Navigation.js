import React from "react";

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const Link = ({ data: { loading, error, allNavLists } }) => {
    if (error) return <h1>Error fetching the post!</h1>
    if (!loading) {
        return(
            <ul className='flex__row'>
                {allNavLists.map((link) => (
                    <li key={link.id}><a href="">{link.linkName}</a>, {link.linkColors}</li>
                ))}
            </ul>
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
