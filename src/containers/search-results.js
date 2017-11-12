import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResults extends Component {
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

    return (
      <div>
        { this.props.searchResults.data.map(this.renderSearch)}
      </div>
    );
  }
}

function mapStateToProps({searchResults}) {
  return { searchResults }
}

export default connect(mapStateToProps)(SearchResults);