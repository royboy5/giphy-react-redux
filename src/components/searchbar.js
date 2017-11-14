import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import { searchGifs } from '../actions/index';

const Input = styled.input`
  width: 555px;
  background: #fff;
  color: #a3a3a3;
  font: inherit;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  border: 0;
  outline: 0;
  padding: 22px 18px;
`;

const Button = styled.button`
  display: inline-block;
  font: inherit;
  border: 0;
  outline: 0;
  -webkit-transition: all 200ms ease-in;
  transition: all 200ms ease-in;
  cursor: pointer;
  background: #7f8ff4;
  color: #fff;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 12px 36px;
  margin-left: -96px;
  text-transform: uppercase;

  &:hover {
    background: #6c7ff2;
  }
`;


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
    if (!this.state.query) {
      return;
    }

    this.props.searchGifs(this.state.query);

    this.setState({ 
      query: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <Input
          placeholder="Seach Gifs"
          value={this.state.query}
          onChange={this.onInputChange}
          onClick={this.props.showMenu}
        />
        <Button type="submit">Submit</Button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchGifs }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);