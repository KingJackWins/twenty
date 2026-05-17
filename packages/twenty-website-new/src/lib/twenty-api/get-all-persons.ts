import { twentyFetch } from '@/lib/twenty-api/client';

export const getAllPersons = (): Promise<unknown> =>
  twentyFetch('/rest/people');
