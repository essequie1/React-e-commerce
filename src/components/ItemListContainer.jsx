import '../scss/ItemListContainer.scss';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="itemList">
      <h2 className="itemList__greeting">{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
