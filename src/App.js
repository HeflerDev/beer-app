import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {stash} from './store/beerDataSlice';
import {Container} from 'react-bootstrap';

import {Header} from './views';
import {List} from './views';

const App = () => {
  const data = useSelector((state) => state.beer.data);
  const displayedData = useSelector((state) => state.beer.displayedData);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://localhost:3000')
        .then((res) => res.json())
        .then((data) => dispatch(stash(data)))
        .catch((err) => dispatch(stash(err)));
  }, []);

  return (
    <Container>
      {
      typeof data === 'object' ? (
        <>
          <Header />
          {
            displayedData && <List />
          }
        </>
      ) : (
        'Loading...'
      )
      }
    </Container>
  );
};

export default App;
