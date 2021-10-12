import { InMemoryCache, makeVar } from '@apollo/client';
export const cache = new InMemoryCache({ addTypename: true });

export const globalModalVar = makeVar(null);
