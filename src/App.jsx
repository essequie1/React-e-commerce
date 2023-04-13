import { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { auth } from './services/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { userContext } from './context/userContext';
import { productsContext } from './context/productsContext';
import { getProducts, getUserData } from './services/firestore';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import UserProfile from './components/UserProfile';
import 'react-toastify/dist/ReactToastify.css';
import './scss/App.scss';

function App() {
  const { addUserData } = useContext(userContext);
  const { addData, cart, getCartFromStorage } = useContext(productsContext);

  // This effect makes sure that the user data is persistent between page reloads, also loads the products from the database and saves them to context.
  // This occurs here as this data is spread with context through the whole app.
  useEffect(() => {
    getProducts().then(data => addData(data));

    const listener = onAuthStateChanged(auth, user => {
      if (user) {
        getUserData(user.uid).then(data => addUserData(data[0]));
      } else {
      }
    });

    return () => {
      listener();
    };
  }, []);

  return (
    <div id="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/item/:pid" element={<ItemDetailContainer />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
