import React from 'react';

import {
  Container,
  Row,
  Col,
  Image,
  Button,
} from 'react-bootstrap';
import logo from '../assets/images/Fundos cerveja.png';
import {Form} from './';

import {useDispatch, useSelector} from 'react-redux';
import {display} from '../store/beerDataSlice';

export const Header = () => {
  const dispatch = useDispatch();
  const hasData = useSelector((item) => item.beer.displayedData !== false);

  const handleClickOnFullList = () => dispatch(display());

  return (
    <Row className="justify-content-center">
      <Col xs={12} md={8} lg={6}>
        <Image fluid src={logo} />
      </Col>
      <Row className="justify-content-center">
        <Col xs={12}>
          {
      hasData ? (
        <Container>
          <Form />
        </Container>
            ) : (
              <Col sm={12}>
                <Button
                  size="lg"
                  onClick={handleClickOnFullList}
                >
                  <b>GO FIND IT!</b>
                </Button>
              </Col>
            )
          }
        </Col>
      </Row>
    </Row>
  );
};
