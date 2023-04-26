import { useEffect, useRef, useState } from 'react';

export const useToggleMenu = () => {
  const [isShown, setIsShown] = useState(false);
  const toggleRef = useRef();

  const handleToggle = () => setIsShown(curr => !curr);

  useEffect(() => {
    if (toggleRef.current !== undefined) {
      let handler = e => {
        if (!toggleRef.current.contains(e.target)) {
          setIsShown(false);
        }
      };

      document.addEventListener('mousedown', handler);
      return () => {
        document.removeEventListener('mousedown', handler);
      };
    }
  }, []);

  return { isShown, toggleRef, handleToggle };
};
