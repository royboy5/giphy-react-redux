import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import SearchBar from './searchbar';
import SearchList from './search-list';
import Results from './search-results';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <SearchBar />
          <SearchList />
          <Results />
        </div>
      </BrowserRouter> 
    );
  }
}

export default connect()(App);
