import loader from '../assets/loading.svg';
import '../scss/Loading.scss';

export const Loading = () => {
  return (
    <dialog className="loading" open>
      <img className="loading__img" src={loader} alt="" />
    </dialog>
  );
};
