import { getOrderByID } from '../services/firestore';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import '../scss/OrderSearch.scss';

export const OrderSearch = () => {
  const [isSearching, setIsSearching] = useState(false);
  const navigation = useNavigate();
  const inputRef = useRef(null);

  const handleSearchOrder = async e => {
    e.preventDefault();
    setIsSearching(true);
    const fields = new FormData(e.target);
    const { id } = Object.fromEntries(fields);
    getOrderByID(id)
      .then(({ orderID }) => {
        navigation(`/orders/${orderID}`);
      })
      .catch(() => {
        toast.error('This order does not exists');
        setIsSearching(false);
        inputRef.current.value = '';
      });
  };

  return (
    <div className="orderSearch-container">
      <form onSubmit={handleSearchOrder}>
        <label>
          Search your Order
          <input ref={inputRef} placeholder="OP-45123..." style={{ width: '500px' }} required name="id" type="text" />
        </label>
        <button disabled={isSearching} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
