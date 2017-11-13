import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchHistory extends Component {
  renderSearch(searchItem) {
    return (
      <div key={searchItem.id}>
        <iframe 
          src={searchItem.embed_url}
          title={searchItem.title}
          style={{border:0}}
        />
      </div>
    );
  }

  render() {

    if (!this.props.searchResults) {
      return '';
    }
    console.log(this.props.searchResults.history);

    return (
      <div>
history
      </div>
    );
  }
}

function mapStateToProps({searchResults}) {
  return { searchResults }
}

export default connect(mapStateToProps)(SearchHistory);