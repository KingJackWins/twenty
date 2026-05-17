import { getSeniorPersons } from '@/lib/twenty-api';

export default async function SeniorsPage() {
  const data = await getSeniorPersons();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
