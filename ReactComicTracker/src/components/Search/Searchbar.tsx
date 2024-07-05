import { useState } from "react"

export const SearchBar = () => {
    const [searchInput, setSearchInput] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };

    return(
        <div className="search-bar">
            <input
                type="text"
                placeholder="search..."
                onChange={handleChange}
                value={searchInput}
            />
            {searchInput}
        </div>
    )
}