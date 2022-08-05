import React, { createContext, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from '../../hooks/useLocalStorage';
import fetchRequest from '../../services/fetchAPI';
import formatterList from '../../utils/formatter';

export const MainContext = createContext();

function MainProvider({ children }) {
  const [menuFood, setMenuFood] = useLocalStorage();
  const [menuDrink, setMenuDrink] = useLocalStorage();

  useEffect(() => {
    const foodRequestList = async () => {
      let request;
      request = await fetchRequest({ key: 'mainMenu', type: 'mea' });
      request = formatterList({ list: request.meals, size: 13 });
      setMenuFood(request);
    };
    const drinkRequestList = async () => {
      let request = await fetchRequest({ key: 'mainMenu', type: 'cocktai' });
      request = formatterList({ list: request.drinks, size: 13 });
      setMenuDrink(request);
    };
    foodRequestList();
    drinkRequestList();
  }, []);

  const valuerProvider = useMemo(() => ({
    menuFood,
    setMenuFood,
    menuDrink,
    setMenuDrink,
  }), []);
  return (
    <MainContext.Provider value={valuerProvider}>
      {children}
    </MainContext.Provider>
  );
}

export default MainProvider;

MainProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
