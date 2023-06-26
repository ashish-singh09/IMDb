import Image from "next/image";

async function getMovie(movieId) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`, { next: { revalidate: 10000 } });
  const data = await res.json();
  return data;
}

export default async function page({ params }) {

  const movieId = params.id;
  const movie = await getMovie(movieId);

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row items-center content-center md:space-x-6 max-w-6xl mx-auto">
        <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
          width={500}
          height={300}
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="Movie Poster"
          style={{ maxWidth: "100%", height: "100%" }}
          className="rounded-lg" />
        <div className="p-2">
          <h2 className="mb-3 text-lg font-bold">{movie.title || movie.name}</h2>
          <p className="mb-3 text-lg"><span className="font-semibold mr-1">Overview:</span>{movie.overview}</p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Release Date:</span>
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  )
}
