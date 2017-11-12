import React, { Component } from 'react';

import SearchBar from '../containers/searchbar';
import SearchList from '../containers/search-results';
import Trending from '../containers/trending';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <SearchList />
        <Trending /> 
      </div>
    );
  }
}

export default App;
