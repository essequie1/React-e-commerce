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
    state: '',
    city: '',
    zip: '',
    address: '',
    email: '',
    password: '',
  });
  const [confirmationData, setConfirmationData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async e => {
    e.preventDefault();
    if (formData.email !== confirmationData.email) return toast.error("Mails don't match.");
    if (formData.password !== confirmationData.password) return toast.error("Passwords don't match.");

    await toast
      .promise(signUp(formData), {
        pending: 'Creating Account...',
        success: 'Account created, please log in',
        error: {
          render({ data }) {
            return data.message;
          },
        },
      })
      .then(() => navigate('/login'));
  };

  const handleOnChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleConfirmations = e => {
    setConfirmationData({
      ...confirmationData,
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
          City
          <input required value={formData.city} type="text" name="city" onChange={e => handleOnChange(e)} />
        </label>
        <label>
          State / Province
          <input required value={formData.state} type="text" name="state" onChange={e => handleOnChange(e)} />
        </label>
        <label>
          Country
          <input required value={formData.country} type="text" name="country" onChange={e => handleOnChange(e)} />
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
          Email Confirmation
          <input
            autoComplete="off"
            onPaste={e => e.preventDefault()}
            onDrop={e => e.preventDefault()}
            required
            value={confirmationData.email}
            type="email"
            name="email"
            onChange={e => handleConfirmations(e)}
          />
        </label>
        <label>
          Password
          <input minLength={6} required value={formData.password} type="password" name="password" onChange={e => handleOnChange(e)} />
        </label>
        <label>
          Password Confirmation
          <input
            autoComplete="off"
            onPaste={e => e.preventDefault()}
            onDrop={e => e.preventDefault()}
            required
            value={confirmationData.password}
            type="password"
            name="password"
            onChange={e => handleConfirmations(e)}
          />
        </label>
        <small>All fields are required</small>
        <button type="submit">Join</button>
      </form>
    </div>
  );
};

export default SignUp;
