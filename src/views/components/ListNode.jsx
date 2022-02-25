import React from 'react';
import PropTypes from 'prop-types';

import Big from 'big.js';

export const ListNode = ({item}) => (
  <ul className="catalog-node">
    <li><b>Name: </b>{item.name}</li>
    <li><b>Category: </b>{item.category ? item.category : 'Uncategorized'}</li>
    <li><b>ABV: </b>{new Big(item.abv).toFixed(3)}</li>
    <li><b>IBU: </b>{item.ibu}</li>
  <li><b>Location:</b>{item.city + ', ' + item.country}</li>
    <li>
        <b>Website: </b>
      {
        item.website ?
        <a href={item.website}>
          {
            item.website.match(/\.\w*/g).join('').split('').slice(1)
          }
        </a> :
        'No Website Avaiable'
      }
    </li>
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
