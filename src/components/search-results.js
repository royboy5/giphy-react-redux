import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { trendingGifs } from '../actions/index';

const Results = styled.div`
  margin-top: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Gif = styled.div`
  display: inline-block;
  margin-bottom: 20px;
`;

class SearchResults extends Component {
  componentDidMount() {
    this.props.trendingGifs();
  }    

  renderSearch(searchItem) {
    return (
      <Gif key={searchItem.id}>
        <iframe 
          src={searchItem.embed_url}
          title={searchItem.title}
          style={{border:0}}
        />
      </Gif>
    );
  }

  render() {
    if (this.props.results.length < 1) {
      return '';
    }

    return (
      <Results>
        {this.props.results[0].res.data.map(this.renderSearch)}
      </Results>
    );
  }
}

function mapStateToProps({results}) {
  return { results }
}

export default connect(mapStateToProps, {trendingGifs})(SearchResults);