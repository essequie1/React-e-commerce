import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../services/auth';
import { toast } from 'react-toastify';
import '../scss/SignUp.scss';

export const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    birth: '',
    country: '',
    city: '',
    zip: '',
    address: '',
    email: '',
    password: '',
  });

  const handleSubmit = async e => {
    e.preventDefault();
    await toast.promise(signUp(formData), {
      pending: 'Creating Account...',
      success: 'Account created, please log in',
      error: 'An error occured, please try again',
    });
    navigate('/login');
  };

  const handleOnChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <form className="signup" onSubmit={e => handleSubmit(e)}>
        <label>
          Name
          <input required value={formData.name} type="text" name="name" onChange={e => handleOnChange(e)} />
        </label>
        <label>
          Surname
          <input required value={formData.surname} type="text" name="surname" onChange={e => handleOnChange(e)} />
        </label>
        <label>
          Date of Birth
          <input required value={formData.birth} type="date" name="birth" onChange={e => handleOnChange(e)} />
        </label>
        <label>
          Country
          <input required value={formData.country} type="text" name="country" onChange={e => handleOnChange(e)} />
        </label>
        <label>
          City
          <input required value={formData.city} type="text" name="city" onChange={e => handleOnChange(e)} />
        </label>
        <label>
          Address
          <input required value={formData.address} type="text" name="address" onChange={e => handleOnChange(e)} />
        </label>
        <label>
          Zip Code
          <input required value={formData.zip} type="text" name="zip" onChange={e => handleOnChange(e)} />
        </label>
        <label>
          Email
          <input required value={formData.email} type="email" name="email" onChange={e => handleOnChange(e)} />
        </label>
        <label>
          Password
          <input required value={formData.password} type="password" name="password" onChange={e => handleOnChange(e)} />
        </label>
        <small>All fields are required</small>
        <button type="submit">Join</button>
      </form>
    </div>
  );
};

export default SignUp;
