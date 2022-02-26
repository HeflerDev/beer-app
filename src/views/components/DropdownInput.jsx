import React from 'react';

import {
  InputGroup,
  DropdownButton,
  Dropdown,
  FormControl,
} from 'react-bootstrap';

export const DropdownInput = ({ onChange, value }) => (
  <>
    <InputGroup className="mb-3">
      <DropdownButton
        title="Filter By:"
        id="input-group-dropdown-1"
        variant="primary"
      >
        <Dropdown.Item href="#">Name</Dropdown.Item>
        <Dropdown.Item href="#">Category</Dropdown.Item>
        <Dropdown.Item href="#">ABV</Dropdown.Item>
        <Dropdown.Item href="#">IBU</Dropdown.Item>
        <Dropdown.Item href="#">City</Dropdown.Item>
        <Dropdown.Item href="#">City</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#">Separated link</Dropdown.Item>
      </DropdownButton>
      <FormControl onChange={onChange} value={value} aria-label="Text input with dropdown button" />
    </InputGroup>
  </>
);
