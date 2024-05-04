// lib/client.js
import { HttpLink, InMemoryCache, ApolloClient } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "https://j6pyq2el6rd4hfxf6jyxeasksy.appsync-api.eu-west-2.amazonaws.com/graphql",
      headers: {
        "x-api-key": "da2-aug7nx5jgvbjfksuzbllf2q5tu",
      },
    }),
  });
});
