import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'ed1tqx1r',
  dataset: 'production',
  useCdn: true,
});
