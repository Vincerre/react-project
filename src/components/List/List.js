import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import SearchForm from '../SearchForm/SearchForm.js';
import { Navigate } from 'react-router-dom';
import { getListById } from '../../redux/listsRedux';
import { getColumnsByList } from '../../redux/columnsRedux';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

const List = () => {
  const { listId } = useParams();

  const id = parseInt(listId, 10);

  const columns = useSelector((state) => getColumnsByList(state, id));

  const listData = useSelector((state) => getListById(state, id));

  if (!listData) return <Navigate to="/" />;
  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>{listData.title}</h2>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <SearchForm />

      <section className={styles.columns}>
        {columns.map((column) => (
          <Column key={column.id} {...column} />
        ))}
      </section>
      <ColumnForm id={id} />
    </div>
  );
};

export default List;
