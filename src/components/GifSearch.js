// GifSearch.js
import React, { useState } from "react";

const GifSearch = ({ onSearchSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Giphy Search:
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default GifSearch;
