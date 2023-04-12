import { createActionName } from '../utils/createActionName.js';

// actions

const SEARCH_UPDATE = createActionName(
  'SEARCH',
  'SEARCH_UPDATE'
);

// selectors

// action creators

export const searching = (payload) => ({
  type: SEARCH_UPDATE,
  payload,
});

const searchReducer = (statePart = [], action) => {
  switch (action.type) {
    case SEARCH_UPDATE:
      return action.payload;
    default:
      return statePart;
  }
};

export default searchReducer;
