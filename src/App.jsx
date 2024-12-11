import React, { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  const [name, setName] = useState("User"); // Placeholder for user name
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks login state
  const [searchType, setSearchType] = useState("title"); // Default search type

  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ marginBottom: "20px" }}>
        <h1>Jammming</h1>
        <button onClick={toggleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
        <p>
          {`Hey ${name}! Browse Spotify by title, artist, or both. Then add your favorites into a newly created list that you can add to your account!`}
        </p>
      </header>

      <main>
        <div style={{ marginBottom: "20px" }}>
          <h2>Search for Songs</h2>
          <SearchBar searchType={searchType} />
          <div>
            <button onClick={() => setSearchType("title")}>
              Search by Title
            </button>
            <button onClick={() => setSearchType("artist")}>
              Search by Artist
            </button>
            <button onClick={() => setSearchType("both")}>
              Search by Title & Artist
            </button>
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h2>Manage Playlist</h2>
          <button>Add</button>
          <input type="text" placeholder="Name Playlist" />
          <button>Remove</button>
          <button>Create Playlist</button>
        </div>

        <div>
          <h2>Results</h2>
          <p>Your search results will appear here...</p>
        </div>
      </main>
    </div>
  );
};

export default App;
