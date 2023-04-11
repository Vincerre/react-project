import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { like } from '../../redux/store.js';

const Card = (props) => {
  const dispatch = useDispatch();
  console.log(props.isFavorite);
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(like(props.id));
  };
  return (
    <li className={styles.card}>
      {props.title}
      <button
        className={
          props.isFavorite ? styles.isFavorite : styles.like
        }
        onClick={handleClick}>
        <i className="fa fa-star-o" />
      </button>
    </li>
  );
};

export default Card;
