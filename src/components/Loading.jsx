import loader from '../assets/loading.svg';
import '../scss/Loading.scss';

const Loading = () => {
  return (
    <dialog className="loading" open>
      <img className="loading__img" src={loader} alt="" />
    </dialog>
  );
};
export default Loading;
