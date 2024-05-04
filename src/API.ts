/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateWeddingRsvpInput = {
  password: string,
  name: string,
  fullName: string,
  human_type?: HumanType | null,
};

export enum HumanType {
  BABY = "BABY",
  ADULT = "ADULT",
  CHILD = "CHILD",
}


export type WeddingRsvp = {
  __typename: "WeddingRsvp",
  password: string,
  name: string,
  fullName?: string | null,
  starter?: string | null,
  main?: string | null,
  dessert?: string | null,
  song?: string | null,
  planning_to_attend?: boolean | null,
  reason?: string | null,
  human_type?: HumanType | null,
  anything_else?: string | null,
  isPlusOne?: boolean | null,
  guestName?: string | null,
  dietary_requirements?: string | null,
  planning_to_object?: boolean | null,
  feature_flag?: string | null,
};

export type UpdateWeddingRsvpInput = {
  password: string,
  name: string,
  starter?: string | null,
  main?: string | null,
  dessert?: string | null,
  song?: string | null,
  planning_to_attend?: boolean | null,
  reason?: string | null,
  isPlusOne?: boolean | null,
  anything_else?: string | null,
  guestName?: string | null,
  fullName?: string | null,
  dietary_requirements?: string | null,
  planning_to_object?: boolean | null,
  feature_flag?: string | null,
  human_type?: HumanType | null,
};

export type DeleteWeddingRsvpInput = {
  password: string,
  name: string,
};

export type CreateWeddingLogInput = {
  password: string,
  time: string,
  data?: string | null,
  customImage?: string | null,
};

export type WeddingLog = {
  __typename: "WeddingLog",
  password: string,
  time: string,
  data?: string | null,
  customImage?: string | null,
};

export type UpdateWeddingLogInput = {
  password: string,
  time: string,
  data?: string | null,
  customImage?: string | null,
};

export type DeleteWeddingLogInput = {
  password: string,
  time: string,
};

export type TableWeddingRsvpFilterInput = {
  password?: TableStringFilterInput | null,
  name?: TableStringFilterInput | null,
  main?: TableStringFilterInput | null,
  dietary_requirements?: TableStringFilterInput | null,
  dessert?: TableStringFilterInput | null,
  song?: TableStringFilterInput | null,
  planning_to_attend?: TableBooleanFilterInput | null,
  reason?: TableStringFilterInput | null,
  planning_to_object?: boolean | null,
};

export type TableStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type TableBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
};

export type WeddingRsvpConnection = {
  __typename: "WeddingRsvpConnection",
  items?:  Array<WeddingRsvp | null > | null,
  nextToken?: string | null,
};

export type TableWeddingLogFilterInput = {
  password?: TableStringFilterInput | null,
  time?: TableStringFilterInput | null,
  data?: TableStringFilterInput | null,
  customImage?: TableStringFilterInput | null,
};

export type WeddingLogConnection = {
  __typename: "WeddingLogConnection",
  items?:  Array<WeddingLog | null > | null,
  nextToken?: string | null,
};

export type CreateWeddingRsvpMutationVariables = {
  input: CreateWeddingRsvpInput,
};

export type CreateWeddingRsvpMutation = {
  createWeddingRsvp?:  {
    __typename: "WeddingRsvp",
    password: string,
    name: string,
    fullName?: string | null,
    starter?: string | null,
    main?: string | null,
    dessert?: string | null,
    song?: string | null,
    planning_to_attend?: boolean | null,
    reason?: string | null,
    human_type?: HumanType | null,
    anything_else?: string | null,
    isPlusOne?: boolean | null,
    guestName?: string | null,
    dietary_requirements?: string | null,
    planning_to_object?: boolean | null,
    feature_flag?: string | null,
  } | null,
};

export type UpdateWeddingRsvpMutationVariables = {
  input: UpdateWeddingRsvpInput,
};

export type UpdateWeddingRsvpMutation = {
  updateWeddingRsvp?:  {
    __typename: "WeddingRsvp",
    password: string,
    name: string,
    fullName?: string | null,
    starter?: string | null,
    main?: string | null,
    dessert?: string | null,
    song?: string | null,
    planning_to_attend?: boolean | null,
    reason?: string | null,
    human_type?: HumanType | null,
    anything_else?: string | null,
    isPlusOne?: boolean | null,
    guestName?: string | null,
    dietary_requirements?: string | null,
    planning_to_object?: boolean | null,
    feature_flag?: string | null,
  } | null,
};

export type DeleteWeddingRsvpMutationVariables = {
  input: DeleteWeddingRsvpInput,
};

export type DeleteWeddingRsvpMutation = {
  deleteWeddingRsvp?:  {
    __typename: "WeddingRsvp",
    password: string,
    name: string,
    fullName?: string | null,
    starter?: string | null,
    main?: string | null,
    dessert?: string | null,
    song?: string | null,
    planning_to_attend?: boolean | null,
    reason?: string | null,
    human_type?: HumanType | null,
    anything_else?: string | null,
    isPlusOne?: boolean | null,
    guestName?: string | null,
    dietary_requirements?: string | null,
    planning_to_object?: boolean | null,
    feature_flag?: string | null,
  } | null,
};

export type CreateWeddingLogMutationVariables = {
  input: CreateWeddingLogInput,
};

export type CreateWeddingLogMutation = {
  createWeddingLog?:  {
    __typename: "WeddingLog",
    password: string,
    time: string,
    data?: string | null,
    customImage?: string | null,
  } | null,
};

export type UpdateWeddingLogMutationVariables = {
  input: UpdateWeddingLogInput,
};

export type UpdateWeddingLogMutation = {
  updateWeddingLog?:  {
    __typename: "WeddingLog",
    password: string,
    time: string,
    data?: string | null,
    customImage?: string | null,
  } | null,
};

export type DeleteWeddingLogMutationVariables = {
  input: DeleteWeddingLogInput,
};

export type DeleteWeddingLogMutation = {
  deleteWeddingLog?:  {
    __typename: "WeddingLog",
    password: string,
    time: string,
    data?: string | null,
    customImage?: string | null,
  } | null,
};

export type GetWeddingRsvpQueryVariables = {
  id: string,
};

export type GetWeddingRsvpQuery = {
  getWeddingRsvp?:  {
    __typename: "WeddingRsvp",
    password: string,
    name: string,
    fullName?: string | null,
    starter?: string | null,
    main?: string | null,
    dessert?: string | null,
    song?: string | null,
    planning_to_attend?: boolean | null,
    reason?: string | null,
    human_type?: HumanType | null,
    anything_else?: string | null,
    isPlusOne?: boolean | null,
    guestName?: string | null,
    dietary_requirements?: string | null,
    planning_to_object?: boolean | null,
    feature_flag?: string | null,
  } | null,
};

export type ListWeddingRsvpsQueryVariables = {
  filter?: TableWeddingRsvpFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWeddingRsvpsQuery = {
  listWeddingRsvps?:  {
    __typename: "WeddingRsvpConnection",
    items?:  Array< {
      __typename: "WeddingRsvp",
      password: string,
      name: string,
      fullName?: string | null,
      starter?: string | null,
      main?: string | null,
      dessert?: string | null,
      song?: string | null,
      planning_to_attend?: boolean | null,
      reason?: string | null,
      human_type?: HumanType | null,
      anything_else?: string | null,
      isPlusOne?: boolean | null,
      guestName?: string | null,
      dietary_requirements?: string | null,
      planning_to_object?: boolean | null,
      feature_flag?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetWeddingLogQueryVariables = {
  password: string,
  time: string,
};

export type GetWeddingLogQuery = {
  getWeddingLog?:  {
    __typename: "WeddingLog",
    password: string,
    time: string,
    data?: string | null,
    customImage?: string | null,
  } | null,
};

export type ListWeddingLogsQueryVariables = {
  filter?: TableWeddingLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWeddingLogsQuery = {
  listWeddingLogs?:  {
    __typename: "WeddingLogConnection",
    items?:  Array< {
      __typename: "WeddingLog",
      password: string,
      time: string,
      data?: string | null,
      customImage?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateWeddingRsvpSubscriptionVariables = {
  password?: string | null,
  name?: string | null,
  main?: string | null,
  dessert?: string | null,
  song?: string | null,
};

export type OnCreateWeddingRsvpSubscription = {
  onCreateWeddingRsvp?:  {
    __typename: "WeddingRsvp",
    password: string,
    name: string,
    fullName?: string | null,
    starter?: string | null,
    main?: string | null,
    dessert?: string | null,
    song?: string | null,
    planning_to_attend?: boolean | null,
    reason?: string | null,
    human_type?: HumanType | null,
    anything_else?: string | null,
    isPlusOne?: boolean | null,
    guestName?: string | null,
    dietary_requirements?: string | null,
    planning_to_object?: boolean | null,
    feature_flag?: string | null,
  } | null,
};

export type OnUpdateWeddingRsvpSubscriptionVariables = {
  password?: string | null,
  name?: string | null,
  main?: string | null,
  dessert?: string | null,
  song?: string | null,
};

export type OnUpdateWeddingRsvpSubscription = {
  onUpdateWeddingRsvp?:  {
    __typename: "WeddingRsvp",
    password: string,
    name: string,
    fullName?: string | null,
    starter?: string | null,
    main?: string | null,
    dessert?: string | null,
    song?: string | null,
    planning_to_attend?: boolean | null,
    reason?: string | null,
    human_type?: HumanType | null,
    anything_else?: string | null,
    isPlusOne?: boolean | null,
    guestName?: string | null,
    dietary_requirements?: string | null,
    planning_to_object?: boolean | null,
    feature_flag?: string | null,
  } | null,
};

export type OnDeleteWeddingRsvpSubscriptionVariables = {
  password?: string | null,
  name?: string | null,
  main?: string | null,
  dessert?: string | null,
  song?: string | null,
};

export type OnDeleteWeddingRsvpSubscription = {
  onDeleteWeddingRsvp?:  {
    __typename: "WeddingRsvp",
    password: string,
    name: string,
    fullName?: string | null,
    starter?: string | null,
    main?: string | null,
    dessert?: string | null,
    song?: string | null,
    planning_to_attend?: boolean | null,
    reason?: string | null,
    human_type?: HumanType | null,
    anything_else?: string | null,
    isPlusOne?: boolean | null,
    guestName?: string | null,
    dietary_requirements?: string | null,
    planning_to_object?: boolean | null,
    feature_flag?: string | null,
  } | null,
};

export type OnCreateWeddingLogSubscriptionVariables = {
  password?: string | null,
  time?: string | null,
  data?: string | null,
  customImage?: string | null,
};

export type OnCreateWeddingLogSubscription = {
  onCreateWeddingLog?:  {
    __typename: "WeddingLog",
    password: string,
    time: string,
    data?: string | null,
    customImage?: string | null,
  } | null,
};

export type OnUpdateWeddingLogSubscriptionVariables = {
  password?: string | null,
  time?: string | null,
  data?: string | null,
  customImage?: string | null,
};

export type OnUpdateWeddingLogSubscription = {
  onUpdateWeddingLog?:  {
    __typename: "WeddingLog",
    password: string,
    time: string,
    data?: string | null,
    customImage?: string | null,
  } | null,
};

export type OnDeleteWeddingLogSubscriptionVariables = {
  password?: string | null,
  time?: string | null,
  data?: string | null,
  customImage?: string | null,
};

export type OnDeleteWeddingLogSubscription = {
  onDeleteWeddingLog?:  {
    __typename: "WeddingLog",
    password: string,
    time: string,
    data?: string | null,
    customImage?: string | null,
  } | null,
};
