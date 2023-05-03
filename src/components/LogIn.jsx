import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../services/auth';
import { useUserContext } from '../context/userContext';
import { getUserData } from '../services/firestore';
import '../scss/LogIn.scss';

export const LogIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { addUserDataToContext } = useUserContext();
  const navigate = useNavigate();

  const handleOnChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    toast
      .promise(logIn(formData), {
        pending: 'Logging in...',
        success: 'Logged in Successfully',
        error: {
          render({ data }) {
            return data.message;
          },
        },
      })
      .then(user => getUserData(user.uid))
      .then(data => addUserDataToContext(data))
      .then(() => {
        navigate('/');
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
