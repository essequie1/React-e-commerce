import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../services/auth';
import { userContext } from '../context/userContext';
import { getUserData } from '../services/firestore';
import '../scss/LogIn.scss';

const LogIn = () => {
  const { addUserData } = useContext(userContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const id = toast.loading('Logging in...');
    await logIn(formData)
      .then(user => getUserData(user.uid))
      .then(data => addUserData(data[0]))
      .then(() => {
        navigate('/');
        toast.update(id, { render: 'Logged in Successfully', type: 'success', isLoading: false, autoClose: 3000 });
      });
  };

  const handleOnChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={e => handleSubmit(e)}>
        <label>
          Email:
          <input value={formData.email} type="email" name="email" id="email" onChange={e => handleOnChange(e)} />
        </label>
        <label>
          Password:
          <input value={formData.password} type="password" name="password" id="password" onChange={e => handleOnChange(e)} />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LogIn;
