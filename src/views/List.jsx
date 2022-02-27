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

  const itemsPerPage = 18;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    data && currentItems ? (
      <Row className="list justify-content-center">
        <Row xs={12}>
          {
            currentItems.map((item, index) => (
              <Col xs={12} lg={4} xxl={3} md={6} key={`${item.name} ${index}`}>
                <ListNode item={item} />
              </Col>
            ))
          }
          <Paginate handlePageClick={handlePageClick} pageCount={pageCount}/>
        </Row>
      </Row>
    ) : (
      null
    )
  );
};
