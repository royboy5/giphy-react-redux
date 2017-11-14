import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import SearchBar from './searchbar';
import SearchList from './search-list';
import Results from './search-results';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { show: true }

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    
  }

  show() {
    this.setState({
      show: true
    });
  }

  hide() {
    this.setState({
      show: false
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <SearchBar showMenu={this.show} hideMenu={this.hide} />
          { this.state.show ? <SearchList /> : null }
          <Results />
        </div>
      </BrowserRouter> 
    );
  }
}

export default connect()(App);
