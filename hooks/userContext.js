import { useContext } from 'react';
import { contextUser } from '../contexts/userContext';

const contextOfUser = () => useContext(contextUser);

export default contextOfUser;
