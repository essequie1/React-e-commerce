// import { Item } from './Item';
import { Item } from './componentsIndex';
import '../scss/ItemList.scss';

export const ItemList = ({ products }) => {
  return (
    <ul className="item-list">
      {products.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </ul>
  );
};
