import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';

const ColumnForm = (props) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addColumn({ title, icon, listId: props.id }));
    setTitle('');
    setIcon('');
  };

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      Title: <TextInput value={title} onChange={(e) => setTitle(e.target.value)} />
      Icon: <TextInput value={icon} onChange={(e) => setIcon(e.target.value)} />
      <Button>Add Column</Button>
    </form>
  );
};

export default ColumnForm;
