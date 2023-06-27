import Results from "@/app/Results";

export default async function page({ params: { searchTerm } }) {

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&include_adult=false`);

    if (!res.ok) {
        throw new Error(data.message || "Something went wrong!");
    }
    const data = await res.json();

    return (
        <div>
        {console.log(data)}
            {data.total_results === 0 && (
                <h1 className="text-lg text-center pt-6">No results found!</h1>
            )}

            {data && <Results results={data.results} />}
        </div>
    )
}
