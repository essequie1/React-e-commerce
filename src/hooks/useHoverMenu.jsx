import { useEffect, useRef, useState } from 'react';

export const useHoverMenu = () => {
  const [isShown, setIsShown] = useState(false);
  const hoverRef = useRef();

  useEffect(() => {
    if (hoverRef.current !== undefined) {
      let handler = e => {
        if (e.composedPath().includes(hoverRef.current) === false) {
          setIsShown(false);
        } else {
          setIsShown(true);
        }
      };

      document.addEventListener('mouseover', handler);
      return () => {
        document.removeEventListener('mouseover', handler);
      };
    }
  }, []);

  return { isShown, hoverRef };
};
