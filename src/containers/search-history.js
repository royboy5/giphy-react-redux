import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchGifs } from '../actions/index';

class SearchHistory extends Component {
  renderSearchHistory(history) {
    return (
      <li>
        {history}
      </li>
    );
  }

  render() {

    if (!this.props.historyResults) {
      return '';
    }

    return (
      <ul>
        {this.props.historyResults.map(this.renderSearchHistory)}
      </ul>
    );
  }
}

function mapStateToProps({historyResults}) {
  return { historyResults }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchGifs }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchHistory);