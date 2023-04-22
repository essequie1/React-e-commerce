import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProductsContext } from '../context/productsContext';
import { Loading, ItemDetail } from './componentsIndex';

export const ItemDetailContainer = () => {
  const [selectedItem, setSelectedItem] = useState([]);
  const { data } = useProductsContext();
  const { pid } = useParams();
  const navigation = useNavigate();

  useEffect(() => {
    if (data.length > 0) {
      const product = data.filter(prod => prod.id === pid);
      setSelectedItem(product);
      if (product.length === 0) {
        navigation('/404', { replace: true });
      }
    }
  }, [pid, data]);

  return <div>{selectedItem.length > 0 ? <ItemDetail product={selectedItem[0]} /> : <Loading />}</div>;
};
