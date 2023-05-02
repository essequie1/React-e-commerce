import { useState } from 'react';
import placeholderImage from '../assets/image-placeholder.png';

export const ImageWithPlaceholder = ({ src, alt, classname }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && (
        <img loading="lazy" decoding="async" className={classname} src={placeholderImage} alt={alt} style={{ display: isLoading ? 'block' : 'none' }} />
      )}
      <img
        loading="lazy"
        decoding="async"
        className={classname}
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        style={{ display: isLoading ? 'none' : 'block' }}
      />
    </>
  );
};
