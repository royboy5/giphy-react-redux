import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
  list-style-type: none;
  margin: 0;
  padding: 0 20px;

  &:hover {
    background-color: #ccc;
  }
`;

const searchListItem = ( {query, onItemSelect} ) => {
  return (
    <Item onClick={() => onItemSelect(query)}>{query}</Item>
  );
} 

export default searchListItem;