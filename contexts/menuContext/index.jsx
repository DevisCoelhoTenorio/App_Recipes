import React, { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from '../../hooks/useLocalStorage';

const menuContext = createContext();

function MenuProvider({ children }) {
  const [menuFood, setMenuFood] = useLocalStorage();
  const [menuDrink, setMenuDrink] = useLocalStorage();

  const valuerProvider = useMemo(() => ({
    menuFood,
    setMenuFood,
    menuDrink,
    setMenuDrink,
  }), []);
  return (
    <menuContext.Provider value={valuerProvider}>
      {children}
    </menuContext.Provider>
  );
}

export default MenuProvider;

MenuProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
