import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import dotenv from 'dotenv';

import Layout from './Containers/Layout';

import './scss/index.scss';

require('dotenv').config();
console.log('API', process.env);

const GRAPHCMS_API = process.env.REACT_APP_GRAPHCMS_API

const client = new ApolloClient({
  link: new HttpLink({ uri: GRAPHCMS_API }),
  cache: new InMemoryCache()
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Layout/>
      </ApolloProvider>
    );
  }
}

export default App;
