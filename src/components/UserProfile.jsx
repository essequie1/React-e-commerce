import { Link, useNavigate } from 'react-router-dom';
import { logOut } from '../services/auth';
import { useUserContext } from '../context/userContext';
import { Loading } from './componentsIndex';
import '../scss/UserProfile.scss';
import { useEffect, useState } from 'react';
import { getOrderByEmail } from '../services/firestore';

export const UserProfile = () => {
  const [loading, setLoading] = useState(true);
  const [userOrders, setUserOrders] = useState([]);
  const { userData, removeUserDataFromContext, isLoggedIn } = useUserContext();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await logOut()
      .then(() => removeUserDataFromContext())
      .then(() => navigate('/'));
  };

  useEffect(() => {
    getOrderByEmail(userData.email)
      .then(data => setUserOrders(data))
      .then(() => setLoading(false));
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <div className="profile-container">
          <h1>Your Profile</h1>
          <div className="profile">
            <p>Name</p>
            <h3>{`${userData.name} ${userData.surname}`}</h3>
            <p>Email</p>
            <h3>{userData.email}</h3>
            <p>Birthday</p>
            <h3>{new Date(userData.birth).toLocaleDateString('ca-gregory')}</h3>
            <p>Address</p>
            <h3>{`${userData.address}, ${userData.city}, ${userData.state}, ${userData.country} (${userData.zip})`}</h3>
            <p>Orders</p>
            {loading ? (
              <Loading size={'small'} />
            ) : (
              <div className="profile__orders">
                {userOrders.length > 0 ? (
                  userOrders.map(order => (
                    <div key={order.orderID} className="profile__order">
                      <Link to={`/orders/${order.orderID}`}>
                        {order.orderID} <span className="material-symbols-outlined">arrow_forward</span>
                      </Link>
                    </div>
                  ))
                ) : (
                  <p>You don't have pending orders...</p>
                )}
              </div>
            )}
            <button onClick={handleLogOut}>Log Out</button>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
