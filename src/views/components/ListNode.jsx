import React from 'react';
import PropTypes from 'prop-types';

import {useSelector} from 'react-redux';

import Big from 'big.js';

export const ListNode = ({item}) => {
  const filterType = useSelector((state) => state.beer.queryType);

  const checkFilter = (filter) => {
    if (filterType === filter) {
      return 'active';
    }
    return ('');
  };


  return (
    <ul className="catalog-node">
      <li className={checkFilter('byName')}><b>Name: </b>{item.name}</li>
      <li className={checkFilter('byCategory')}>

        <b>Category: </b>{item.category ? item.category : 'Uncategorized'}
      </li>
      <li className={checkFilter('byAbv')}>

        <b>ABV: </b>{new Big(item.abv).toFixed(3)} (%)
      </li>
      <li className={checkFilter('byIbu')}>

        <b>IBU: </b>{item.ibu} (ibu)
      </li>
      <li className={checkFilter('byCity') +
      checkFilter('byState') +
      checkFilter('byCountry')}
      >
        <b>
          Location:
        </b>
        {item.city + ', ' + item.state + ', ' + item.country}
      </li>
      <li>
        <b>Website: </b>
        {
          item.website ?
          <a href={item.website} target="_blank" rel="noreferrer">
            {
              item.website.match(/\.\w*/g).join('').split('').slice(1)
            }
          </a> :
          'No Website Avaiable'
        }
      </li>
    </ul>
  );
};

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
