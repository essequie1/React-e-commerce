import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../context/userContext';
import '../scss/SessionWidget.scss';

const SessionWidget = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const { userData } = useContext(userContext);
  const navigate = useNavigate();

  return (
    <div className="session">
      {Object.keys(userData).length === 0 ? (
        <>
          <button onClick={() => setIsMenuShown(curr => !curr)} className="session__btn">
            <span className="session__icon material-symbols-outlined">login</span>
          </button>
          {isMenuShown ? (
            <div className="session__menu">
              <button
                onClick={() => {
                  navigate('/login');
                  setIsMenuShown(curr => !curr);
                }}
              >
                Log In
              </button>
              <button
                onClick={() => {
                  navigate('/signup');
                  setIsMenuShown(curr => !curr);
                }}
              >
                Sign Up
              </button>
            </div>
          ) : null}
        </>
      ) : (
        <button onClick={() => navigate('/profile')} className="session__btn">
          <span className="session__icon material-symbols-outlined">account_circle</span>
        </button>
      )}
    </div>
  );
};
export default SessionWidget;
