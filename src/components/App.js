import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import SearchBar from '../containers/searchbar';
import SearchHistory from '../containers/search-history';
import SearchList from '../containers/search-results';
import Trending from '../containers/trending';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <SearchBar />
          <SearchHistory />
          <SearchList />
          <Trending /> 
        </div>
      </BrowserRouter> 
    );
  }
}

export default connect()(App);
