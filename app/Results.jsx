export default function Results({ results }) {
    return (
        results.map(result => {
            return <div key={result.id}>{result.original_title}</div>
        })
    );
}
