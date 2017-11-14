import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import SearchBar from './searchbar';
import SearchList from './search-list';
import Results from './search-results';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { show: false }

    this.onInputFocus = this.onInputFocus.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);
  }

  onInputFocus() {
    this.setState({
      show: true
    });
  }

  onInputBlur() {
    this.setState({
      show: false
    });
  }

  render() {
    console.log('state', this.state);
    return (
      <BrowserRouter>
        <div className="App">
          <SearchBar showMenu={this.onInputFocus} hideMenu={this.onInputBlur} />
          { this.state.show ? <SearchList /> : null }
          <Results />
        </div>
      </BrowserRouter> 
    );
  }
}

export default connect()(App);
