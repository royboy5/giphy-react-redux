import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchGifs, searchHistory } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      query: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ query: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.searchGifs(this.state.query);
    this.props.searchHistory(this.state.query);

    this.setState({ 
      query: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input
          placeholder="Seach Gifs"
          value={this.state.query}
          onChange={this.onInputChange}
        />
        <span>
          <button type="submit">submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchGifs, searchHistory }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);