import * as React from 'react'
import { render } from 'react-dom'
import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { App } from './App'

const httpLink = createHttpLink({
    uri: 'http://localhost:5000/web-verse/us-central1/operator/graphql',
})

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

const WrappedApp = (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
)

render(WrappedApp, document.getElementById('root'))
