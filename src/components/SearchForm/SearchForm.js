import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searching } from '../../redux/store';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searching(search));
    setSearch('');
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSearch}>
      <TextInput
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
