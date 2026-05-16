import { getAllQuotes } from '@/lib/twenty-api';

export default async function QuotesPage() {
  const data = await getAllQuotes();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
