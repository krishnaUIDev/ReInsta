import React from 'react'
import ReactDOM from 'react-dom'
import { injectGlobal } from 'styled-components'
import App from './App'
import Routes from './Routes'
import registerServiceWorker from './registerServiceWorker'
import {
  ApolloClient,
  createNetworkInterface,
  ApolloProvider
} from 'react-apollo'

// const networkInterface = createNetworkInterface({
//   url: 'http://localhost:8081'
// })

// const client = new ApolloClient({
//   networkInterface
// })

// injectGlobal`
//  @font-face {
//      font-family: 'Pacifico',
//      src: url('https://fonts.googleapis.com/css?family=Pacifico');
//  }

// `

// const Main = <ApolloProvider> <Routes /> </ApolloProvider>

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
