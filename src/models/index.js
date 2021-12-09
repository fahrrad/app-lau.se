// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Categories = {
  "INNOVATION": "INNOVATION",
  "IMPACT": "IMPACT",
  "VALUE": "VALUE",
  "REALISM": "REALISM"
};

const Teams = {
  "ONE": "ONE",
  "THREE": "THREE",
  "FOUR": "FOUR",
  "FIVE": "FIVE",
  "SIX": "SIX"
};

const { Votes } = initSchema(schema);

export {
  Votes,
  Categories,
  Teams
};