// GifListContainer.js
import React, { Component } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

class GifListContainer extends Component {
  state = {
    gifs: [],
    query: "" // State to store the user's search query
  };

  fetchGifs = () => {
    const apiKey = "ru0WZoQKZGB1Rk8D5KwScNnOObVFY2Md";
    const { query } = this.state;
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          gifs: data.data.slice(0, 3),
        });
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  componentDidMount() {
    this.fetchGifs(); // Fetch GIFs when component mounts
  }

  handleSearchSubmit = (query) => {
    this.setState({ query }, this.fetchGifs); // Update the query state and fetch GIFs
  };

  render() {
    return (
      <div>
        <GifSearch onSearchSubmit={this.handleSearchSubmit} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
