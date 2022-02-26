import React from 'react';

import {useDispatch} from 'react-redux';
import {setQueryType} from '../../store/beerDataSlice';

import {
  InputGroup,
  DropdownButton,
  Dropdown,
  FormControl,
} from 'react-bootstrap';

export const DropdownInput = ({onChange, value}) => {
  const dispatch = useDispatch();

  const handleClick = ({target}) => {
    dispatch(setQueryType(target.id));
  };

  return (
    <>
      <InputGroup className="mb-3">
        <DropdownButton
          title="Filter By:"
          id="input-group-dropdown-1"
          variant="primary"
        >
          <Dropdown.Item >
            <div onClick={handleClick} id="byName">
              Name
            </div>
          </Dropdown.Item>

          <Dropdown.Item>
            <div onClick={handleClick} id="byCategory">
              Category
            </div>
          </Dropdown.Item>

          <Dropdown.Item>
            <div onClick={handleClick} id="byAbv">
              ABV
            </div>
          </Dropdown.Item>

          <Dropdown.Item>
            <div onClick={handleClick} id="byIbu">
              IBU
            </div>
          </Dropdown.Item>

          <Dropdown.Item>
            <div onClick={handleClick} id="byCity">
              City
            </div>
          </Dropdown.Item>

          <Dropdown.Item>
            <div onClick={handleClick} id="byState">
              State
            </div>
          </Dropdown.Item>

          <Dropdown.Item>
            <div onClick={handleClick} id="byCountry">
              Country
            </div>
          </Dropdown.Item>
        </DropdownButton>
        <FormControl
          onChange={onChange}
          value={value}
          aria-label="Text input with dropdown button"
        />
      </InputGroup>
    </>
  );
};
