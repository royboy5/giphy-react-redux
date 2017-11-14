import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import SearchListItem from './search-list-item';
import { searchGifs } from '../actions/index';

const SearchHistory = styled.ul`
  background: #fff;
  color: #000;
  width: 590px;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
`;

class SearchList extends Component {
  render() {
    
    if (!this.props.results) {
      return '';
    }
    
    const searchItems = this.props.results.map(item => {
      // if (item.query === '') {
      //   return;
      // }
      
      return (
        <SearchListItem 
          key={item.query}
          query={item.query}
          onItemSelect={this.props.searchGifs} />
      );
    });
    
    return (
      <SearchHistory>
        {searchItems}          
      </SearchHistory>
    );
  }
}

function mapStateToProps({results}) {
  return { results }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchGifs }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchList);