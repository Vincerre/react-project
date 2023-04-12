import shortid from 'shortid';
import { createActionName } from '../utils/createActionName.js';

// actions

const ADD_COLUMN = createActionName('COLUMNS', 'ADD_COLUMN');

// selectors

export const getColumnsByList = ({ columns }, listId) =>
  columns.filter((column) => column.listId === listId);

// action creators

export const addColumn = (payload) => ({
  type: ADD_COLUMN,
  payload,
});

const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_COLUMN:
      return [
        ...statePart,
        { ...action.payload, id: shortid() },
      ];
    default:
      return statePart;
  }
};

export default columnsReducer;
