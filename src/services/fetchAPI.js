const listUrl = {
  mainMenu: (type) => `https://www.the${type}ldb.com/api/json/v1/1/search.php?s=`,
};

const fetchRequest = async ({ key, type }) => {
  const URL = listUrl[key](type);
  const request = await fetch(URL).then((response) => response.json());
  return request;
};

export default fetchRequest;
