// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Votes } = initSchema(schema);

export {
  Votes
};