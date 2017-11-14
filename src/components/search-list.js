import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchListItem from './search-list-item';
import { searchGifs } from '../actions/index';

class SearchList extends Component {
  render() {
    
    if (!this.props.results) {
      return '';
    }
    
    const searchItems = this.props.results.map(item => {
      if (item.query === '') {
        return;
      }
      
      return (
        <SearchListItem 
          key={item.query}
          query={item.query}
          onItemSelect={this.props.searchGifs} />
      );
    });
    
    return (
      <div className="searchHistory">
        {searchItems}          
      </div>
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