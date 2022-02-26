import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {display} from '../store/beerDataSlice.js';

import filters from '../api/filters.js';

import {
  Col,
  Row,
} from 'react-bootstrap';
import {Button, FormSlider, DropdownInput} from './components';

export const Form = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const data = useSelector((state) => state.beer.data);

  const handleChange = ({target}) => {
    setQuery(target.value);
    if (target.value.length >= 3) {
      dispatch(display(filters.byName(data, target.value)));
    } else {
      dispatch(display(data));
    }
  };

  return (
    <form>
      <Row>
        <Col xs={12} >
          <DropdownInput onChange={handleChange} value={query}/>
        </Col>
      </Row>
    </form>
  );
};
