export const dynamic = 'force-dynamic';

import Results from "./Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {

  const genre = searchParams || 'trending';

  const res = await fetch(`https://api.themoviedb.org/3/${genre === 'topRated' ? 'movie/top_rated' :
    'trending/all/week'}?api_key=${API_KEY}&language=en-US&page=1`, { next: { revalidate: 10000 } });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  const result = data.results;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div><Results results={result} /></div>
    </main>
  )
}