import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import List from "../List/List";
import "./SearchBar.css";
import { debounce } from "lodash";

const debouncedHandler = debounce((value) => {
  setInputText(value.toLowerCase());
}, 300);

const inputHandler = (e) => {
  debouncedHandler(e.target.value);
};

const SearchBar = () => {
  const [inputText, setInputText] = useState("");

  // Handles the input text, converting it to lowercase
  const inputHandler = (e) => {
    setInputText(e.target.value.toLowerCase());
  };

  return (
    <div className="main">
      <h1>Search Songs</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search for a song by title"
        />
      </div>
      {/* Pass the inputText as a prop to List */}
      <List input={inputText} />
    </div>
  );
};

export default SearchBar;
