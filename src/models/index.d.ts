import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Categories {
  INNOVATION = "INNOVATION",
  IMPACT = "IMPACT",
  VALUE = "VALUE",
  REALISM = "REALISM"
}

export enum Teams {
  ONE = "ONE",
  THREE = "THREE",
  FOUR = "FOUR",
  FIVE = "FIVE",
  SIX = "SIX"
}



type VotesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Votes {
  readonly id: string;
  readonly Team?: Teams | keyof typeof Teams;
  readonly Category?: Categories | keyof typeof Categories;
  readonly User?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Votes, VotesMetaData>);
  static copyOf(source: Votes, mutator: (draft: MutableModel<Votes, VotesMetaData>) => MutableModel<Votes, VotesMetaData> | void): Votes;
}