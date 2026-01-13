function GenreSelect({ genres, selectedGenre, onSelect }) {
  return (
    <div>
      {genres.map((genre) => (
        <button
          key={genre}
          className={genre === selectedGenre ? "active" : ""}
          onClick={() => onSelect(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreSelect;
