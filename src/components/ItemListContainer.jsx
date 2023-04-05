import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import getApiData from '../services/fetchApi';
import '../scss/ItemListContainer.scss';

const ItemListContainer = () => {
  const [apiData, setApiData] = useState();
  const { category } = useParams();

  useEffect(() => {
    getApiData().then(data => {
      if (category !== undefined) {
        const filteredCategory = data.filter(product => product.category === category);
        setApiData(filteredCategory);
      } else {
        setApiData(data);
      }
    });
  }, [category]);

  return <div className="item-list-container">{apiData ? <ItemList apiData={apiData} /> : null}</div>;
};

export default ItemListContainer;
