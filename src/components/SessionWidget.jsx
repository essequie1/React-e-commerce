import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/userContext';
import '../scss/SessionWidget.scss';

export const SessionWidget = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const { userData } = useUserContext();
  const navigate = useNavigate();

  // Effect for menu closing when clicking outside of it
  useEffect(() => {
    const closeMenu = e => {
      if (e.composedPath()[0].className !== 'session__menu' && e.composedPath()[0].className !== 'session-widget-icon material-symbols-outlined') {
        setIsMenuShown(false);
      }
    };
    document.body.addEventListener('click', closeMenu);
    return () => document.body.removeEventListener('click', closeMenu);
  }, []);

  const handleLogIn = () => {
    navigate('/login');
    setIsMenuShown(false);
  };

  const handleSignUp = () => {
    navigate('/signup');
    setIsMenuShown(false);
  };

  return (
    <div className="session-widget">
      {Object.keys(userData)?.length === 0 ? (
        <>
          <button className="session-widget__btn" onClick={() => setIsMenuShown(curr => !curr)}>
            <span className="session-widget-icon material-symbols-outlined">login</span>
          </button>
          {isMenuShown ? (
            <div className="user-menu">
              <button onClick={handleLogIn}>Log In</button>
              <button onClick={handleSignUp}>Sign Up</button>
            </div>
          ) : null}
        </>
      ) : (
        <button className="session-widget__btn" onClick={() => navigate('/profile')}>
          <span className="session-widget-icon material-symbols-outlined">account_circle</span>
        </button>
      )}
    </div>
  );
};
