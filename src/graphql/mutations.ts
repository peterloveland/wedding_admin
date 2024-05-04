/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createWeddingRsvp = /* GraphQL */ `mutation CreateWeddingRsvp($input: CreateWeddingRsvpInput!) {
  createWeddingRsvp(input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateWeddingRsvpMutationVariables,
  APITypes.CreateWeddingRsvpMutation
>;
export const updateWeddingRsvp = /* GraphQL */ `mutation UpdateWeddingRsvp($input: UpdateWeddingRsvpInput!) {
  updateWeddingRsvp(input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateWeddingRsvpMutationVariables,
  APITypes.UpdateWeddingRsvpMutation
>;
export const deleteWeddingRsvp = /* GraphQL */ `mutation DeleteWeddingRsvp($input: DeleteWeddingRsvpInput!) {
  deleteWeddingRsvp(input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteWeddingRsvpMutationVariables,
  APITypes.DeleteWeddingRsvpMutation
>;
export const createWeddingLog = /* GraphQL */ `mutation CreateWeddingLog($input: CreateWeddingLogInput!) {
  createWeddingLog(input: $input) {
    password
    time
    data
    customImage
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateWeddingLogMutationVariables,
  APITypes.CreateWeddingLogMutation
>;
export const updateWeddingLog = /* GraphQL */ `mutation UpdateWeddingLog($input: UpdateWeddingLogInput!) {
  updateWeddingLog(input: $input) {
    password
    time
    data
    customImage
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateWeddingLogMutationVariables,
  APITypes.UpdateWeddingLogMutation
>;
export const deleteWeddingLog = /* GraphQL */ `mutation DeleteWeddingLog($input: DeleteWeddingLogInput!) {
  deleteWeddingLog(input: $input) {
    password
    time
    data
    customImage
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteWeddingLogMutationVariables,
  APITypes.DeleteWeddingLogMutation
>;
