import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { MainContext } from '../contexts/MainContext';

export const useAuthContext = () => useContext(AuthContext);
export const useMainContext = () => useContext(MainContext);
