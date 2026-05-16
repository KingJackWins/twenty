import { getAllPersons } from '@/lib/twenty-api';

export default async function PersonsPage() {
  const data = await getAllPersons();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
