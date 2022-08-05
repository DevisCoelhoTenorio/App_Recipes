import React, { useState } from 'react';
import Input from '../UI/Input';

const INITIAL_STATE = {
  inputText: '',
  seachOption: '',
};

const OPTIONS_SEARCH = ['Ingredient', 'Name', 'First-letter'];

function SearchBar() {
  const [searchValues, setSearchVAlues] = useState(INITIAL_STATE);

  const onHandleChange = ({ target: { value, name } }) => {
    setSearchVAlues({
      ...searchValues,
      [name]: value,
    });
  };

  return (
    <section>
      <Input
        name="inputText"
        type="text"
        value={searchValues.inputText}
        onChange={onHandleChange}
        placehouder="Search field"
      />
      {OPTIONS_SEARCH.map((option) => (
        <label key={option} htmlFor={option}>
          <input
            id={option}
            name="seachOption"
            type="radio"
            value={option}
            onChange={onHandleChange}
          />
          {option}
        </label>
      ))}
    </section>
  );
}

export default SearchBar;
