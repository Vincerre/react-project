import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { like, removeCard } from '../../redux/cardsRedux';

const Card = (props) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(like(props.id));
  };

  const remove = (e) => {
    e.preventDefault();
    dispatch(removeCard(props.id));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <div>
        <button
          className={
            props.isFavorite ? styles.isFavorite : styles.button
          }
          onClick={handleClick}>
          <i className="fa fa-star-o" />
        </button>
        <button className={styles.button} onClick={remove}>
          <i className="fa fa-trash" />
        </button>
      </div>
    </li>
  );
};

export default Card;
