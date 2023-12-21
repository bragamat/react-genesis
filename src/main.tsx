import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'

import { initializeGraphql } from '@app/config/graphql/config'
import App from '@app/App'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <ApolloProvider client={initializeGraphql()}>
        <App />
      </ApolloProvider>
    </Router>
  </React.StrictMode>
)
