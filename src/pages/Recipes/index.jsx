import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header';
import RecipeList from '../../components/RecipeList';

function Home() {
  const { pathname } = useLocation();

  const selectPag = pathname.includes('foods') ? 'Foods' : 'Drinks';

  return (
    <section>
      <Header
        namePag={selectPag}
      />
      <RecipeList
        namePag={selectPag}
      />
    </section>
  );
}
export default Home;
