import React, { createContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import fetchRequest from '../../services/fetchAPI';
import formatterList from '../../utils/formatter';

export const MainContext = createContext();

function MainProvider({ children }) {
  const [stateList, setStateList] = useState({ list: [], load: false });
  const navigate = useNavigate();

  const menuRequest = async ({
    key, type, list, size, filter,
  }) => {
    setStateList({
      list: [],
      load: true,
    });
    let request;
    request = await fetchRequest({ key, type, filter });
    request = formatterList({ list: request[list], size });
    if (request.length === 1) {
      const page = type === 'mea' ? 'foods' : 'drinks';
      return navigate(`/${page}/${request[0].id}`);
    }
    return setStateList({
      list: request,
      load: false,
    });
  };

  const valuerProvider = useMemo(() => ({
    stateList,
    menuRequest,
  }), [stateList]);
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
