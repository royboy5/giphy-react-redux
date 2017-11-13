import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchGifs } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      query: '',
      history: []
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({ query: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log('state', this.state);
    this.props.searchGifs(this.state.query, this.state.histoy);

    this.setState({ 
      query: '',
      history: [this.state.query, ...this.state.history].slice(0,4)
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
  return bindActionCreators({ searchGifs }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);