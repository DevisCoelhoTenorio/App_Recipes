import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMainContext } from '../../hooks/useContext';
import Input from '../UI/Input';
import Button from '../UI/Button';

const INITIAL_STATE = {
  inputText: '',
  seachOption: '',
};

const OPTIONS_SEARCH = ['Ingredient', 'Name', 'First-letter'];

function SearchBar() {
  const [searchValues, setSearchVAlues] = useState(INITIAL_STATE);
  const { menuRequest } = useMainContext();
  const { pathname } = useLocation();

  const onHandleChange = ({ target: { value, name } }) => {
    setSearchVAlues({
      ...searchValues,
      [name]: value,
    });
  };
  const filterRequest = () => {
    let params = {
      key: `search${searchValues.seachOption}`,
      filter: searchValues.inputText,
      type: 'mea',
      list: 'meals',
      size: 13,
    };
    if (pathname.includes('drinks')) {
      params = {
        ...params,
        type: 'cocktai',
        list: 'drinks',
      };
    }
    menuRequest(params);
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
            value={option.replace('-', '')}
            onChange={onHandleChange}
          />
          {option}
        </label>
      ))}
      <Button
        button
        onClick={filterRequest}
        name="Search"
      />
    </section>
  );
}

export default SearchBar;
