import React from 'react';

const searchListItem = ( {query, onItemSelect} ) => {
  return (
    <li onClick={() => onItemSelect(query)}>{query}</li>
  );
} 

export default searchListItem;