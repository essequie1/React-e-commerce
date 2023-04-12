import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../services/firestore';
import Loading from './Loading';
import ItemDetail from './ItemDetail';
import { productsContext } from '../context/productsContext';

const ItemDetailContainer = () => {
  const { selectedItem, unselectItem, filterById } = useContext(productsContext);
  const { pid } = useParams();

  useEffect(() => {
    filterById(pid);
    return () => unselectItem();
  }, [pid]);

  return <div className="item-detail-container">{Object.keys(selectedItem).length > 0 ? <ItemDetail product={selectedItem} /> : <Loading />}</div>;
};

export default ItemDetailContainer;
