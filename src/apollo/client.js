import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  concat,
  split,
} from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { onError } from '@apollo/client/link/error';
import { cache } from './cache';
import { getAccessToken } from './../utils/authUtil';
import fetch from 'unfetch';

const URI = process.env.REACT_APP_URI;
const WS_URI = process.env.REACT_APP_WS_URI;

const authMiddleware = new ApolloLink((operation, forward) => {
  const accessToken = getAccessToken();
  operation.setContext({
    headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : null,
  });
  return forward(operation);
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  }

  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const httpLink = createHttpLink({
  uri: URI,
  fetchOptions: fetch,
});

const wsLink = new WebSocketLink({
  uri: WS_URI,
  options: {
    reconnect: true,
    connectionParams: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

export const client = new ApolloClient({
  link: ApolloLink.from([errorLink, concat(authMiddleware, splitLink)]),
  cache,
  defaultOptions: {
    watchQuery: { fetchPolicy: 'cache-and-network' },
    query: { fetchPolicy: 'network-only' },
  },
});
