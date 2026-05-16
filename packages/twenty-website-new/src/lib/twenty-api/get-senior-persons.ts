import { twentyFetch } from '@/lib/twenty-api/client';

export const getSeniorPersons = (): Promise<unknown> =>
  twentyFetch('/s/persons/seniors');
