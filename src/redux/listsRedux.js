import shortid from 'shortid';
import { createActionName } from '../utils/createActionName.js';

// actions

const ADD_LIST = createActionName('lists', 'ADD_LIST');

// action creators

export const addList = (payload) => ({
  type: ADD_LIST,
  payload,
});

//selectors

export const getListById = ({ lists }, listId) =>
  lists.find((list) => list.id === listId);

export const getAllLists = (state) => state.lists;

const listsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_LIST:
      return [
        ...statePart,
        { ...action.payload, id: shortid() },
      ];
    default:
      return statePart;
  }
};

export default listsReducer;
