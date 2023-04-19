import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductsContext } from '../context/productsContext';
import { ItemList, Loading } from './componentsIndex';
import '../scss/ItemListContainer.scss';

export const ItemListContainer = () => {
  const { data, selectedCategory, filterByCategory } = useProductsContext();
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
      {data?.length > 0 ? (
        <div className="item-list-container">
          <ItemList products={category === undefined ? data : selectedCategory} />
          {/* <button onClick={addDataToDb}>añadir</button> */}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
