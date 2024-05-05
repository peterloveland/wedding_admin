// lib/apollo-provider.js
"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import {
  NextSSRApolloClient,
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import config from "../../aws-exports";

function makeClient() {
  const httpLink = new HttpLink({
    uri: config.API.GraphQL.endpoint,
    headers: {
      "x-api-key": config.API.GraphQL.apiKey,
    },
  });

  return new NextSSRApolloClient({
    connectToDevTools: true,
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
