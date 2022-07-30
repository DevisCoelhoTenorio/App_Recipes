import React, { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import useLocalStorage from '../../hooks/useLocalStorage';

export const MenuContext = createContext();

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
    <MenuContext.Provider value={valuerProvider}>
      {children}
    </MenuContext.Provider>
  );
}

export default MenuProvider;

MenuProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
