import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type HashtagMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BakeryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Hashtag {
  readonly id: string;
  readonly name?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Hashtag, HashtagMetaData>);
  static copyOf(source: Hashtag, mutator: (draft: MutableModel<Hashtag, HashtagMetaData>) => MutableModel<Hashtag, HashtagMetaData> | void): Hashtag;
}

export declare class Bakery {
  readonly id: string;
  readonly Name?: string;
  readonly Num?: number;
  readonly location?: string;
  readonly openDate?: string;
  readonly openHour?: string;
  readonly lineUp?: string;
  readonly lineUpPrice?: string;
  readonly SNS?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Bakery, BakeryMetaData>);
  static copyOf(source: Bakery, mutator: (draft: MutableModel<Bakery, BakeryMetaData>) => MutableModel<Bakery, BakeryMetaData> | void): Bakery;
}