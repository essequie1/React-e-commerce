import { useNavigate } from 'react-router-dom';
import { useToggleMenu } from '../hooks/useToggleMenu';
import { useUserContext } from '../context/userContext';
import '../scss/SessionWidget.scss';

export const SessionWidget = () => {
  const { isShown, toggleRef, handleToggle } = useToggleMenu();
  const { isLoggedIn } = useUserContext();
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate('/login');
    handleToggle();
  };

  const handleSignUp = () => {
    navigate('/signup');
    handleToggle();
  };

  return (
    <div ref={toggleRef} className="session-widget">
      {isLoggedIn ? (
        <button className="session-widget__btn" onClick={() => navigate('/profile')}>
          <span className="session-widget-icon material-symbols-outlined">account_circle</span>
        </button>
      ) : (
        <>
          <button className="session-widget__btn" onClick={() => handleToggle()}>
            <span className="session-widget-icon material-symbols-outlined">login</span>
          </button>
          {isShown ? (
            <div className="user-menu">
              <button onClick={handleLogIn}>Log In</button>
              <button onClick={handleSignUp}>Sign Up</button>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};

// SHIRTS
// SWEATSHIRTS
// T-SHIRTS
// CARGOS
// SLIPPERS
// PANTS
// DENIM
// BAGS
// JACKETS
// HOODIES
// HATS
// SHORTS
// SNEAKERS
