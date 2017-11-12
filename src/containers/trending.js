import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { trendingGifs } from '../actions/index';

class Trending extends Component {

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
    if (!this.props.trendingResults) {
      this.props.trendingGifs();
      return (
        <div>Loading gifs</div>
      );
    }

    console.log('trending', this.props.trendingResults.data);
    return (
      <div>
        {this.props.trendingResults.data.map(this.renderSearch)}
      </div>
    );
  }
}

function mapStateToProps({trendingResults}) {
  return { trendingResults }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ trendingGifs }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Trending);