import React from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { FlexContainer, Row, Col } from '../FlexGrid';
import { Card, CardHeader, CardImg, CardTitle, CardBody, CardContent, CardFooter } from '../CardElements';
import Button from '../Button';

const POST_PER_PAGE = 4;

const reviewCard = (
  <Card review text={'secondary'} style={{ backgroundImage: 'url("https://media.graphcms.com/' + post.coverImage.handle + '")'}}>
    <CardBody className={'rgba-blue-bright'}>
      <CardTitle> { post.title }</CardTitle>
      <CardContent style={{ color: "#FFF"}}>
        January's a great month to visit San Diego! (So are all the other months.) Want a list of every beach you can comfortably bask on in the middle of "winter?".
      </CardContent>
      <CardFooter>
        <Button
          active={false}
          size={'sm'}
          color={'secondary'}
          href="/travel"
          children={'Read more'}
        />
      </CardFooter>
    </CardBody>
  </Card>
);

const postCard = (
  <Card blog>
    <CardImg top hover overlay={'white-gleam'} className={'img-fluid'} alt="tractor image" src={`https://media.graphcms.com/resize=w:150,h:100,fit:crop/${post.coverImage.handle}`} />
    <CardBody>
      <CardTitle>
        { post.title }
        <hr className="hr-underline"/>
      </CardTitle>
      <CardContent>
        January's a great month to visit San Diego! (So are all the other months.) Want a list of every beach you can comfortably bask on in the middle of "winter?".
      </CardContent>
      <CardFooter>
        <Button
          active={false}
          size={'sm'}
          flat
          href="https://google.com"
          children={'Read more...'}
        />
      </CardFooter>
    </CardBody>
  </Card>
)


const Blog = ({data:{loading, error, posts, postsConnection, networkStatus}, loadMorePosts }) => {
  if(error) return <h3>Error Fetching Posts!...</h3>;

  if(posts && postsConnection){
    const loadMorePosts = posts.length < postsConnection.aggregate.count;

    return (
      <FlexContainer fluid className="push-content-wrap">
        <Row>
          {
            posts.map(post => (
              <Col sm={4} key={`post-${post.id}`}>
                { post.blog === 'review' ? reviewCard : postCard }
              </Col>
            ))}
        </Row>
        <Row>
          <Col auto/>
          <Col sm={8} className="text-center">
            { loadMorePosts ? <Button flat disabled={loading} onClick={ () => loadMorePosts() }>{ loading ? "Loading more posts..." : "Show more posts"}</Button> : ''}
          </Col>
          <Col auto/>
        </Row>
      </FlexContainer>

    )
  }
  return <h3>Loading Posts...</h3>
};

export const posts = gql`
    query posts( $first: Int!, $skip: Int! ){
      posts( orderBy: dateAndTime_DESC, first: $first, skip: $skip ) {
        id
        slug
        title
        dateAndTime
        coverImage {
          handle
        }
        tags
        author {
          name
        }
      },
      postsConnection {
        aggregate{
          count
        }
      }
    }
`
export const postsQueryVars = {
  skip: 0,
  first: POST_PER_PAGE
}

export default graphql( posts, {
  options: {
    variables: postsQueryVars
  }, props: ({ data }) => ({
    data,
    loadMorePosts: () => {
      return data.fetchMore({
        variables: {
          skip: data.posts.length
        },
        updateQuery:( previousResult, {fetchMoreResult}) => {
          if(!fetchMoreResult) {
            return previousResult;
          }
          return Object.assign({}, previousResult, {
            allPosts:[...previousResult.posts, ...fetchMoreResult.posts]
          })
        }
      })
    }
  })
})(Blog);
