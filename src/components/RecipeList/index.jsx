import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMainContext } from '../../hooks/useContext';
import CardMenuRecipe from '../CardMenuRecipe';
import Loading from '../Loading';

function RecipeList({ namePag }) {
  const { menuRequest, stateList } = useMainContext();

  useEffect(() => {
    const setListMenu = () => {
      let params = {
        key: 'mainMenu',
        type: 'mea',
        list: 'meals',
        size: 13,
      };
      if (namePag !== 'Foods') {
        params = {
          ...params,
          type: 'cocktai',
          list: 'drinks',
        };
      }
      menuRequest(params);
    };
    setListMenu();
  }, []);

  return (
    <div>
      {!stateList.load ? stateList.list.map((item) => (
        <CardMenuRecipe
          key={item.id}
          img={item.img}
          name={item.name}
        />
      )) : <Loading />}
    </div>

  );
}

export default RecipeList;

RecipeList.propTypes = {
  namePag: PropTypes.string.isRequired,
};
