import React from "react";
import { useState } from "react";
import GenreSelect from "./GenreSelect";
// import Counter from "./Counter"
// import SearchForm from "./SearchForm.jsx";


function App() {
//  return React.createElement(
//     Counter,
//     { initialValue: 0 }
//   );

// return (
//   <SearchForm
//   initialQuery="react"
//   onSearch={(value) => {
//     console.log("Searching for:", value);
//   }}
// />
// )
const genres = ["All", "Action", "Comedy", "Drama"];
  const [selectedGenre, setSelectedGenre] = useState("All");

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div>
      <GenreSelect
        genres={genres}
        selectedGenre={selectedGenre}
        onSelect={handleGenreSelect}
      />

      <p>Selected genre: {selectedGenre}</p>
    </div>
  );
}
export default App;