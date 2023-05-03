import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import {
  Navbar,
  ItemListContainer,
  ItemDetailContainer,
  LogIn,
  SignUp,
  UserProfile,
  Checkout,
  NotFound,
  OrderContainer,
  OrderSearch,
} from './components/componentsIndex';
import 'react-toastify/dist/ReactToastify.css';
import './scss/App.scss';

function App() {
  return (
    <div id="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/brand/:brand" element={<ItemListContainer />} />
        <Route path="/brand/:brand/:category" element={<ItemListContainer />} />
        <Route path="/item/:pid" element={<ItemDetailContainer />} />
        <Route path="/ordersearch" element={<OrderSearch />} />
        <Route path="/orders/:oid" element={<OrderContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={1500}
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
