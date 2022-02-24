import React from 'react';
import PropTypes from 'prop-types';

export const ListNode = ({name, category, abv, ibu, location, website}) => (
  <ul>
    <li>{name}</li>
    <li>{category}</li>
    <li>{abv}</li>
    <li>{ibu}</li>
    <li>{location}</li>
    <li>{website}</li>
  </ul>
);

ListNode.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired,
  ibu: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
};
