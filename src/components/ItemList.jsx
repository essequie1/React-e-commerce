import { Item } from './componentsIndex';
import '../scss/ItemList.scss';

export const ItemList = ({ products }) => {
  return (
    <ul className="item-list">
      {products.map(product => (
        <Item
          key={product.id}
          brand={product.brand}
          gender={product.gender}
          id={product.id}
          price={product.price}
          title={product.title}
          variations={product.variations}
        />
      ))}
    </ul>
  );
};
