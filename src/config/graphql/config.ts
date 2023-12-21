import { useMemo } from 'react'
import { setContext } from '@apollo/client/link/context'
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  NormalizedCacheObject,
  concat,
} from '@apollo/client'

import apolloCache from './cache'
import { Session } from '@app/@types/session'

let apolloClient: ApolloClient<NormalizedCacheObject | null>

const authMiddleware = new ApolloLink((operation, forward) => {
  const authorization = operation.getContext().headers?.authorization?.jwt || ''

  if (authorization) {
    operation.setContext({
      headers: {
        authorization,
      },
    })
  }
  return forward(operation)
})

function createApolloClient(session?: Session | null) {
  const httpLink = new HttpLink({
    uri: `${import.meta.env.VITE_GRAPHQL_API_ENDPOINT}/graphql`,
  })

  const authLink = setContext((_, { headers, session: clientSession }) => {
    // console.log({ session, clientSession });

    const authorization = session?.jwt || clientSession?.jwt || ''
    if (authorization) {
      return {
        headers: { ...headers, authorization },
      }
    }

    return {
      headers: { ...headers },
    }
  })

  return new ApolloClient({
    link: concat(authMiddleware, authLink.concat(httpLink)),
    // link: concat(authMiddleware, httpLink),
    cache: apolloCache,
    ssrMode: typeof window === 'undefined',
  })
}

export function initializeGraphql(
  initialState: NormalizedCacheObject | null = null,
  session?: Session | null
) {
  // verify if apollo client already exists before creating a new one
  const apolloClientGlobal = apolloClient ?? createApolloClient(session)

  // recover cache
  if (initialState) {
    apolloClientGlobal.cache.restore(initialState)
  }

  // initialize apollo client in SSR with clean cache
  if (typeof window === 'undefined') return apolloClientGlobal

  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClient
}

export function useGraphql(initialState = {}, session?: Session) {
  const store = useMemo(
    () => initializeGraphql(initialState, session),
    [initialState, session]
  )
  return store
}
