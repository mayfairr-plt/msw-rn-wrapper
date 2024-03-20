import persist from './persist';
import { factory } from '@mswjs/data';

export const database = factory({});
persist(database);
