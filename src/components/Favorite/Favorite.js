import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';

const Favorite = () => {
  const cards = useSelector(getFavoriteCards);

  if (cards.length === 0) {
    return (
      <div className={styles.container}>
        <PageTitle>No favorite cards</PageTitle>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <PageTitle>Favorite</PageTitle>
      <article className={styles.column}>
        <ul className={styles.cards}>
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              id={card.id}
              isFavorite={card.isFavorite}
            />
          ))}
        </ul>
      </article>
    </div>
  );
};

export default Favorite;
