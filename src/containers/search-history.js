import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchHistory extends Component {
  renderHistory(item) {
    if (item.query === '') {
      return;
    }

    return (
      <li key={item.query}>
        {item.query}
      </li>
    );
  }

  render() {

    if (!this.props.results) {
      return '';
    }

    return (
      <div>
        { this.props.results.map(this.renderHistory) }
          
      </div>
    );
  }
}

function mapStateToProps({results}) {
  return { results }
}

export default connect(mapStateToProps)(SearchHistory);