import { useState } from "react"

function SearchForm({ initialQuery, onSearch }) {

    const [query, setQuery] = useState(initialQuery || "");
    const handleSearch = () => {
        onSearch(query);
    }

    const handleKeyDown = (event) => {
        if(event.key === " Enter"){
            onSearch(query);
        }
    };

    return (
        <div className="search-form" >
            <input
            type = "text"
            value = {query}
            onChange = {(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="intitialSearch"
            />
      <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchForm;