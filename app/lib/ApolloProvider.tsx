// lib/apollo-provider.js
"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import {
  NextSSRApolloClient,
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

function makeClient() {
  // TO DO HDIE THIS API
  const httpLink = new HttpLink({
    uri: "https://j6pyq2el6rd4hfxf6jyxeasksy.appsync-api.eu-west-2.amazonaws.com/graphql",
    headers: {
      "x-api-key": "da2-aug7nx5jgvbjfksuzbllf2q5tu",
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
