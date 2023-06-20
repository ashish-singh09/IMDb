import NavbarItem from "./NavbarItem";

export default function Navbar() {
    return (
        <div className="flex items-center justify-center py-4 dark:bg-gray-600 bg-amber-100 lg:text-lg">
            <NavbarItem title="Trending" param="trending" />
            <NavbarItem title="Top Rated" param="topRated" />
        </div>
    )
}
