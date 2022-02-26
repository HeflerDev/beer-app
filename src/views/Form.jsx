import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {display} from '../store/beerDataSlice.js';

import filters from '../api/filters.js';
import _ from 'underscore';

import {ArrowUp, ArrowDown} from '../assets/icons';

import {
  Col,
  Row,
  Button,
} from 'react-bootstrap';
import {DropdownInput} from './components';

export const Form = () => {
  const [query, setQuery] = useState('');
  const [sorted, setSorted] = useState('desc');
  const dispatch = useDispatch();
  const data = useSelector((state) => state.beer.data);
  const queryType = useSelector((state) => state.beer.queryType);

  const handleChange = ({target}) => {
    setQuery(target.value);
    if (target.value.length > 0) {
      dispatch(display(filters[queryType](data, target.value)));
    } else {
      dispatch(display(data));
    }
  };

  const handleSort = () => {
    switch (queryType) {
      case 'byName':
        if (sorted === 'desc') {
          dispatch(display(filters[queryType](_.sortBy(data, 'name'), query)));
          setSorted('asc');
        } else {
          dispatch(display(filters[queryType](_.sortBy(data, 'name').reverse(), query)));
          setSorted('desc');
        }
        break;
      case 'byCategory':
        if (sorted === 'desc') {
          dispatch(display(filters[queryType](_.sortBy(data, 'category'), query)));
          setSorted('asc');
        } else {
          dispatch(display(filters[queryType](_.sortBy(data, 'category').reverse(), query)));
          setSorted('desc');
        }
        break;
      case 'byAbv':
        if (sorted === 'desc') {
          dispatch(display(filters[queryType](_.sortBy(data, 'abv'), query)));
          setSorted('asc');
        } else {
          dispatch(display(filters[queryType](_.sortBy(data, 'abv').reverse(), query)));
          setSorted('desc');
        }
        break;
      case 'byIbu':
        if (sorted === 'desc') {
          dispatch(display(filters[queryType](_.sortBy(data, 'ibu'), query)));
          setSorted('asc');
        } else {
          dispatch(display(filters[queryType](_.sortBy(data, 'ibu').reverse(), query)));
          setSorted('desc');
        }
        break;
      case 'byCity':
        if (sorted === 'desc') {
          dispatch(display(filters[queryType](_.sortBy(data, 'city'), query)));
          setSorted('asc');
        } else {
          dispatch(display(filters[queryType](_.sortBy(data, 'city').reverse(), query)));
          setSorted('desc');
        }
        break;
      case 'byState':
        if (sorted === 'desc') {
          dispatch(display(filters[queryType](_.sortBy(data, 'state'), query)));
          setSorted('asc');
        } else {
          dispatch(display(filters[queryType](_.sortBy(data, 'state').reverse(), query)));
          setSorted('desc');
        }
        break;
      case 'byCountry':
        if (sorted === 'desc') {
          dispatch(display(filters[queryType](_.sortBy(data, 'country'), query)));
          setSorted('asc');
        } else {
          dispatch(display(filters[queryType](_.sortBy(data, 'country').reverse(), query)));
          setSorted('desc');
        }
        break;
      default:
        if (sorted === 'desc') {
          dispatch(display(filters[queryType](_.sortBy(data, 'name'), query)));
          setSorted('asc');
        } else {
          dispatch(display(filters[queryType](_.sortBy(data, 'name').reverse(), query)));
          setSorted('desc');
        }
        break;
    }
  };

  return (
    <form>
      <Row>
        <Col xs={12} >
          <DropdownInput onChange={handleChange} value={query}/>
        </Col>
        <Col xs={12} md={4} lg={3}>
          <Button className='sort-btn' onClick={handleSort}>
    Sort Current Filter {
      sorted === 'asc' ? (
        <ArrowUp />
      ) : (
        <ArrowDown />
      )
            }
          </Button>
        </Col>
      </Row>
    </form>
  );
};
