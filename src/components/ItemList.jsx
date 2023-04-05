import Item from './Item';
import '../scss/ItemList.scss';

const ItemList = ({ apiData }) => {
  return (
    <ul className="item-list">
      {apiData.map(item => (
        <Item key={item.id} id={item.id} title={item.title} img={item.image} price={item.price} category={item.category} />
      ))}
    </ul>
  );
};

export default ItemList;
