import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/userContext';
import '../scss/SessionWidget.scss';

const SessionWidget = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const { userData } = useUserContext();
  const navigate = useNavigate();

  // Effect for menu closing when clicking outside of it
  useEffect(() => {
    const closeMenu = e => {
      if (e.composedPath()[0].className !== 'session__menu' && e.composedPath()[0].className !== 'session__icon material-symbols-outlined') {
        setIsMenuShown(false);
      }
    };
    document.body.addEventListener('click', closeMenu);
    return () => document.body.removeEventListener('click', closeMenu);
  }, []);

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
