import React from 'react';
import {useSelector} from 'react-redux';
import {Row, Col} from 'react-bootstrap';

export const List = () => {
  const data = useSelector((state) => state.beer.displayedData);

  return (
    data ? (
      <Row>
        <Col xs={12}>
          <ul>
            <li>Name</li>
            <li>Category</li>
            <li>ABV</li>
            <li>IBU</li>
            <li>Location</li>
            <li>Website</li>
          </ul>
        </Col>
        {
          data.map((item) => (
              null
          ))
        }
      </Row>
    ) : (
      null
    )
  );
};
