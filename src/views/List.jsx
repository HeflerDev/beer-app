import React from 'react';
import {useSelector} from 'react-redux';
import {Row, Col} from 'react-bootstrap';

import {ListNode} from './components';

export const List = () => {
  const data = useSelector((state) => state.beer.displayedData);
  data ? data.map((item)=>console.log(item.abv)) : null;

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
            <Col xs="12" key={item.name}>
              <ListNode
                name={item.name}
                category={item.category}
                abv={item.abv}
                ibu={item.ibu}
                location={item.city}
                website={item.website}
              />
            </Col>
          ))
        }
      </Row>
    ) : (
      null
    )
  );
};
