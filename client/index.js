import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from '@apollo/react-hooks'

// establishes socket connection
import './socket'

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={history}>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('app')
)
