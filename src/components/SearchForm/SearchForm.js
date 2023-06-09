import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searching } from '../../redux/searchRedux';

const SearchForm = () => {
  const dispatch = useDispatch('');

  let defaultSearch = useSelector((state) => state.search);
  const [search, setSearch] = useState(defaultSearch);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searching(search));
    setSearch('');
  };

  useEffect(() => {
    return () => {
      dispatch(searching(''));
    };
  }, []);

  return (
    <form className={styles.searchForm} onSubmit={handleSearch}>
      <TextInput placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
