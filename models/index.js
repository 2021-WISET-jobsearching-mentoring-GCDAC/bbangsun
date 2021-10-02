// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Hashtag, Bakery } = initSchema(schema);

export {
  Hashtag,
  Bakery
};