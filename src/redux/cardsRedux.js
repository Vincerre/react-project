import shortid from 'shortid';
import { strContains } from '../utils/strContains';
import { createActionName } from '../utils/createActionName.js';

// actions

const ADD_CARD = createActionName('cards', 'ADD_CARD');
const TOGGLE_CARD_FAVORITE = createActionName('cards', 'TOGGLE_CARD_FAVORITE');
const REMOVE_CARD = createActionName('cards', 'REMOVE_CARD');

// action creators

export const addCard = (payload) => ({
  type: ADD_CARD,
  payload,
});

export const like = (payload) => ({
  type: TOGGLE_CARD_FAVORITE,
  payload,
});

export const removeCard = (payload) => ({
  type: REMOVE_CARD,
  payload,
});

// selectors

export const getFilteredCards = ({ cards, search }, columnId) =>
  cards.filter((card) => card.columnId === columnId && strContains(card.title, search));

export const getFavoriteCards = (state) => state.cards.filter((card) => card.isFavorite === true);

// reducer

const cardsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, { ...action.payload, id: shortid() }];
    case TOGGLE_CARD_FAVORITE:
      return statePart.map((card) => (card.id === action.payload ? { ...card, isFavorite: !card.isFavorite } : card));
    case REMOVE_CARD:
      return [...statePart.filter((card) => card.id !== action.payload)];

    default:
      return statePart;
  }
};

export default cardsReducer;
