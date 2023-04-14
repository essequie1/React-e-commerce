import { useNavigate } from 'react-router-dom';
import { logOut } from '../services/auth';
import { useUserContext } from '../context/userContext';
import Loading from './Loading';
import '../scss/UserProfile.scss';

const UserProfile = () => {
  const { userData, removeUserData } = useUserContext();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await logOut()
      .then(() => removeUserData())
      .then(() => navigate('/'));
  };

  return (
    <>
      {Object.keys(userData).length > 0 ? (
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
            <h3>{`${userData.address}, ${userData.city}, ${userData.country} (${userData.zip})`}</h3>
            <p>Orders</p>
            {/* {userData.orders.length > 0 ? userData.orders.map((order, idx) => <p>Order n°{idx}</p>) : <h3>You don't have pending orders...</h3>} */}
            <button onClick={handleLogOut}>Log Out</button>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};
export default UserProfile;
