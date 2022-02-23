import {useDispatch} from 'react-redux';
import {stash} from '../state/beerDataSlice';

const dispatch = useDispatch();

const callBeerDB = () => {
  fetch('http://localhost:3000')
      .then((res) => res.json())
      .then((data) => dispatch(stash(data)))
      .catch((err) => dispatch(stash(err)));
};

export default callBeerDB;
