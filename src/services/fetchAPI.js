const listUrl = {
  mainMenu: (type) => `https://www.the${type}ldb.com/api/json/v1/1/search.php?s=`,
  searchIngredient: (type, filter) => `https://www.the${type}ldb.com/api/json/v1/1/filter.php?i=${filter}`,
  searchName: (type, filter) => `https://www.the${type}ldb.com/api/json/v1/1/search.php?s=${filter}`,
  searchFirstletter: (type, filter) => `https://www.the${type}ldb.com/api/json/v1/1/search.php?f=${filter}`,

};

const fetchRequest = async ({ key, type, filter = null }) => {
  const URL = listUrl[key](type, filter);
  const request = await fetch(URL).then((response) => response.json());
  return request;
};

export default fetchRequest;
