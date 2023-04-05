const API_LINK = 'https://fakestoreapi.com/products';

const getApiData = () => {
  return fetch(API_LINK).then(res => res.json());
};

export default getApiData;
