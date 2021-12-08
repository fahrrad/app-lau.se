import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type VotesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Votes {
  readonly id: string;
  readonly Team?: string;
  readonly Category?: string;
  readonly User?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Votes, VotesMetaData>);
  static copyOf(source: Votes, mutator: (draft: MutableModel<Votes, VotesMetaData>) => MutableModel<Votes, VotesMetaData> | void): Votes;
}