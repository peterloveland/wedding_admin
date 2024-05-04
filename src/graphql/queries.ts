/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getWeddingRsvp = /* GraphQL */ `query GetWeddingRsvp($id: String!) {
  getWeddingRsvp(id: $id) {
    password
    name
    fullName
    starter
    main
    dessert
    song
    planning_to_attend
    reason
    human_type
    anything_else
    isPlusOne
    guestName
    dietary_requirements
    planning_to_object
    feature_flag
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetWeddingRsvpQueryVariables,
  APITypes.GetWeddingRsvpQuery
>;
export const listWeddingRsvps = /* GraphQL */ `query ListWeddingRsvps(
  $filter: TableWeddingRsvpFilterInput
  $limit: Int
  $nextToken: String
) {
  listWeddingRsvps(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      password
      name
      fullName
      starter
      main
      dessert
      song
      planning_to_attend
      reason
      human_type
      anything_else
      isPlusOne
      guestName
      dietary_requirements
      planning_to_object
      feature_flag
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListWeddingRsvpsQueryVariables,
  APITypes.ListWeddingRsvpsQuery
>;
export const getWeddingLog = /* GraphQL */ `query GetWeddingLog($password: String!, $time: String!) {
  getWeddingLog(password: $password, time: $time) {
    password
    time
    data
    customImage
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetWeddingLogQueryVariables,
  APITypes.GetWeddingLogQuery
>;
export const listWeddingLogs = /* GraphQL */ `query ListWeddingLogs(
  $filter: TableWeddingLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listWeddingLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      password
      time
      data
      customImage
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListWeddingLogsQueryVariables,
  APITypes.ListWeddingLogsQuery
>;
