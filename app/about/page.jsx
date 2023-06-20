export default function page() {
    return (
        <div className="max-w-6xl mx-auto space-y-4 p-4">
            <h1 className="text-2xl text-amber-600 font-medium">About</h1>
            <p>
                This is a clone of the IMBd website. It was created using Next.js and Tailwind CSS.
            </p>
            <p>
                The data is fetched from the <a href="https://www.themoviedb.org/">TMDb API</a>.
                And the images are fetched from the <a href="https://www.themoviedb.org/">TMDb API</a> as well.
                We use the <a href="https://nextjs.org/docs/basic-features/image-optimization">Next.js Image Optimization</a> to optimize the images.
                The goal of this project is to learn Next.js and Tailwind CSS.
            </p>
            <p>
                Now moving on to the technical stuff. The project is divided into two parts.
                First part is`<span className="font-bold">app</span>` and the second part is `<span className="font-bold">components</span>`.
                Now the `<span className="font-bold">app</span>` folder contains all the pages and the `<span className="font-bold">components</span>` folder contains all the components.
            </p>
        </div>
    );
}
