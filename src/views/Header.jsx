import React from 'react';
import {
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import { Bottle } from '../assets/icons';
import {Button} from './components';
import {Form} from './'

import {useDispatch, useSelector} from 'react-redux';
import {display} from '../store/beerDataSlice';

export const Header = () => {
  const dispatch = useDispatch();
  const hasData = useSelector(item => item.beer.displayedData !== false)

  const handleClickOnFullList = () => dispatch(display());

  return (
    <Row className="justify-content-center">
      <Col xs={12} md={8}>
        <Bottle size={'100%'} colorPrimary="#613710" colorSecondary='#e4b629' />
      </Col>
      <Col xs={12} md={4} className="d-flex justify-content-center flex-column">
        <h1>The Golden Bottle</h1>
        <p>Knowledge that every Beer Master needs</p>
      </Col>
      <Row className="justify-content-center">
        <Col xs={12}>
    {
      hasData ? (
        <Form /> 
      ) : (
          <Button onClick={handleClickOnFullList} text="Check the full List" />
      )
    }
        </Col>
      </Row>
    </Row>
  );
};
