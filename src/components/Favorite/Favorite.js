import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux';

const Favorite = () => {
  const cards = useSelector(getFavoriteCards);

  if (!cards.length) {
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
            <Card key={card.id} {...card} />
          ))}
        </ul>
      </article>
    </div>
  );
};

export default Favorite;
