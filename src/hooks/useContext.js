import { useContext } from 'react';
import { UserContext } from '../contexts/userContext';
import { MenuContext } from '../contexts/menuContext';

export const contextOfUser = () => useContext(UserContext);
export const contextOfMenu = () => useContext(MenuContext);
