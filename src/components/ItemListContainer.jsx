import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductsContext } from '../context/productsContext';
import { Filter, ItemList, Loading } from './componentsIndex';
import useDebounce from '../hooks/useDebounce';
import '../scss/ItemListContainer.scss';

export const ItemListContainer = () => {
  const [search, setSearch] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const debouncedSearch = useDebounce(search, 500);
  const { data } = useProductsContext();
  const { category, brand } = useParams();

  useEffect(() => {
    let filteredList = data.filter(prod => {
      return prod.title.toLowerCase().includes(debouncedSearch.toLowerCase());
    });
    if (category !== undefined) {
      filteredList = filteredList.filter(prod => prod.category === category);
    }
    if (brand !== undefined) {
      filteredList = filteredList.filter(prod => prod.brand === brand);
    }

    setFilteredItems(filteredList);
  }, [data, debouncedSearch, category, brand]);

  const handleSearch = e => {
    setSearch(e.target.value);
  };

  return (
    <>
      {data.length > 0 ? (
        <div className="item-list-container">
          <Filter handleSearch={handleSearch} search={search} />
          <ItemList products={filteredItems} />
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
