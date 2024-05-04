/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateWeddingRsvp = /* GraphQL */ `subscription OnCreateWeddingRsvp(
  $password: String
  $name: String
  $main: String
  $dessert: String
  $song: String
) {
  onCreateWeddingRsvp(
    password: $password
    name: $name
    main: $main
    dessert: $dessert
    song: $song
  ) {
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
` as GeneratedSubscription<
  APITypes.OnCreateWeddingRsvpSubscriptionVariables,
  APITypes.OnCreateWeddingRsvpSubscription
>;
export const onUpdateWeddingRsvp = /* GraphQL */ `subscription OnUpdateWeddingRsvp(
  $password: String
  $name: String
  $main: String
  $dessert: String
  $song: String
) {
  onUpdateWeddingRsvp(
    password: $password
    name: $name
    main: $main
    dessert: $dessert
    song: $song
  ) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateWeddingRsvpSubscriptionVariables,
  APITypes.OnUpdateWeddingRsvpSubscription
>;
export const onDeleteWeddingRsvp = /* GraphQL */ `subscription OnDeleteWeddingRsvp(
  $password: String
  $name: String
  $main: String
  $dessert: String
  $song: String
) {
  onDeleteWeddingRsvp(
    password: $password
    name: $name
    main: $main
    dessert: $dessert
    song: $song
  ) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteWeddingRsvpSubscriptionVariables,
  APITypes.OnDeleteWeddingRsvpSubscription
>;
export const onCreateWeddingLog = /* GraphQL */ `subscription OnCreateWeddingLog(
  $password: String
  $time: String
  $data: String
  $customImage: String
) {
  onCreateWeddingLog(
    password: $password
    time: $time
    data: $data
    customImage: $customImage
  ) {
    password
    time
    data
    customImage
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateWeddingLogSubscriptionVariables,
  APITypes.OnCreateWeddingLogSubscription
>;
export const onUpdateWeddingLog = /* GraphQL */ `subscription OnUpdateWeddingLog(
  $password: String
  $time: String
  $data: String
  $customImage: String
) {
  onUpdateWeddingLog(
    password: $password
    time: $time
    data: $data
    customImage: $customImage
  ) {
    password
    time
    data
    customImage
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateWeddingLogSubscriptionVariables,
  APITypes.OnUpdateWeddingLogSubscription
>;
export const onDeleteWeddingLog = /* GraphQL */ `subscription OnDeleteWeddingLog(
  $password: String
  $time: String
  $data: String
  $customImage: String
) {
  onDeleteWeddingLog(
    password: $password
    time: $time
    data: $data
    customImage: $customImage
  ) {
    password
    time
    data
    customImage
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteWeddingLogSubscriptionVariables,
  APITypes.OnDeleteWeddingLogSubscription
>;
