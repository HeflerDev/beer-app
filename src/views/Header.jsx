import React from 'react';
import {
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import GoldBook from '../assets/images/goldbook.png';
import {Button} from './components';

import {useDispatch, useSelector} from 'react-redux';
import {display} from '../store/beerDataSlice';

export const Header = () => {
  const dispatch = useDispatch();

  const handleClickOnFullList = () => dispatch(display());

  return (
    <Row className="justify-content-center">
      <Col xs={8}>
        <Image fluid src={GoldBook} />
      </Col>
      <Col>
        <h1>The Golden Book</h1>
        <p>Knowledge that every Beer Master needs</p>
      </Col>
      <Row className="justify-content-center">
        <Col xs={6}>
          <Button onClick={handleClickOnFullList} text="Check the full List" />
        </Col>
      </Row>
    </Row>
  );
};
