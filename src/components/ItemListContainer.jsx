import { useEffect, useContext } from 'react';
import { json, useParams } from 'react-router-dom';
import { productsContext } from '../context/productsContext';
import ItemList from './ItemList';
import Loading from './Loading';
import '../scss/ItemListContainer.scss';

const ItemListContainer = () => {
  const { data, cart, selectedCategory, filterByCategory } = useContext(productsContext);
  const { category } = useParams();

  useEffect(() => {
    filterByCategory(category);
  }, [category, data]);

  // const addDataToDb = async () => {
  //   await addDoc(collection(db, 'products'), {
  //     brand: '',
  //     category: '',
  //     description: '',
  //     gender: 'men',
  //     price: 0,
  //     title: '',
  //     variations: {
  //       black: {
  //         color: '',
  //         images: [],
  //       },
  //     },
  //   });
  // };

  return (
    <>
      {data.length > 0 ? (
        <div className="item-list-container">
          <ItemList products={category === undefined ? data : selectedCategory} />
          {/* <button onClick={addDataToDb}>añadir</button> */}
          <button onClick={() => console.log(cart)}>LOGEAR CART</button>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ItemListContainer;
