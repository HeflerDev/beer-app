import React from 'react';
import PropTypes from 'prop-types';

import Big from 'big.js'

export const ListNode = ({item}) => (
  <ul>
    <li>{item.name}</li>
    <li>{item.category}</li>
    <li>{new Big(item.abv).toFixed(3)}</li>
    <li>{item.ibu}</li>
    <li>{item.city}</li>
  <li>{item.website ? item.website : "No Website Avaiable"}</li>
  </ul>
);

ListNode.propTypes = {
  item: {
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    abv: PropTypes.string.isRequired,
    ibu: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    website: PropTypes.string,
  },
};
