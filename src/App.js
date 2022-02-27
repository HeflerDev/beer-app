import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {stash} from './store/beerDataSlice';
import {Container} from 'react-bootstrap';

import {Header} from './views';
import {List} from './views';

import Bg from './assets/images/pattern.png';

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
    <main style={{'background': `url(${Bg})`, 'background-size': '50%'}}>
      <Header />
      <Container className="page-container">
        {
      typeof data === 'object' ? (
        <>
          {
            displayedData && <List />
          }
        </>
      ) : (
        'Loading...'
      )
        }
      </Container>
    </main>
  );
};

export default App;
