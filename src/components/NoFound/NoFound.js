import errorImage from '../../cat.jpg';
import s from './NoFound.module.css';

export default function NoFound() {
  return (
    <div role="alert">
      <img className={s.catImg} src={errorImage} width="500" alt="sadСat" />
      <p className={s.text}>Nothing was found for your query!</p>
    </div>
  );
}
