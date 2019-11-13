import React from 'react';
import './Searchbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const Searchbar = () => {
  return (
    <div class="d-flex justify-content-center h-100">
      <div class="searchbar">
        <input class="search_input" type="text" name="" placeholder="Search..." />
        <a href="/" class="search_icon"><strong>Search</strong></a>
      </div>
    </div>
  );
};

export default Searchbar;