import { twentyFetch } from '@/lib/twenty-api/client';

export const getAllQuotes = (): Promise<unknown> =>
  twentyFetch('/rest/quotes');
