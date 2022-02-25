import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Row, Col} from 'react-bootstrap';

import {ListNode} from './components';
import {Paginate} from './utils';

export const List = () => {
  const data = useSelector((state) => state.beer.displayedData);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 20;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    data && currentItems ? (
      <Row className="list">
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
        <Col xs={12} >
          {
            currentItems.map((item) => (
              <Col xs={12} key={item.name}>
                <ListNode item={item} />
              </Col>
            ))
          }
          <Paginate handlePageClick={handlePageClick} pageCount={pageCount}/>
        </Col>
      </Row>
    ) : (
      null
    )
  );
};
