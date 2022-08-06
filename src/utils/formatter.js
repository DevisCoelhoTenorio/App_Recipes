const formatterList = ({ list, size }) => {
  let formattedList = list.length <= 12 ? list : list.slice(1, size);
  formattedList = formattedList.reduce((acc, curr) => [...acc, {
    id: curr.idMeal ? curr.idMeal : curr.idDrink,
    img: curr.strMealThumb ? curr.strMealThumb : curr.strDrinkThumb,
    name: curr.strMeal ? curr.strMeal : curr.strDrink,
  }], []);

  return formattedList;
};

export default formatterList;
