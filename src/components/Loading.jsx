import loadingBig from '../assets/loading.gif';
import loadingSmall from '../assets/loading-small.gif';
import '../scss/Loading.scss';

export const Loading = ({ size, style }) => {
  return (
    <>
      {size === 'small' ? (
        <div style={style} className="loading--small">
          <img className="loading--small__img" src={loadingSmall} alt="" />
        </div>
      ) : (
        <div className="loading--big">
          <img className="loading--big__img" src={loadingBig} alt="" />
        </div>
      )}
    </>
  );
};
