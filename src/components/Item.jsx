import { Link } from 'react-router-dom';
import '../scss/Item.scss';

const Item = ({ title, price, img, category, id }) => {
  return (
    <li className="item">
      <Link to={`/item/${id}`}>
        <div className="images">
          <img src={img} alt="" />
        </div>
        <div className="description">
          <p className="description__title">{title}</p>
          <p className="description__category">{category}</p>
          <p className="description__price">$ {price.toFixed(2)}</p>
        </div>
      </Link>
    </li>
  );
};

export default Item;
