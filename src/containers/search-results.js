import React, { Component } from 'react';
import { connect } from 'react-redux';

import { trendingGifs } from '../actions/index';

class SearchResults extends Component {
  componentDidMount() {
    this.props.trendingGifs();
  }    

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
    
    if (this.props.results.length < 1) {
      return '';
    }

    // console.log("SR:", this.props.results);
    
    return (
      <div>
        {this.props.results[0].res.data.map(this.renderSearch)}
      </div>
    );
  }
}

function mapStateToProps({results}) {
  return { results }
}

export default connect(mapStateToProps, {trendingGifs})(SearchResults);