let SET_CARDS = "SET-CARDS";

let initialState = {
  cards: [],
};

const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARDS:
      return {
        ...state,
        cards: [...state.cards, ...action.cards],
      };

    default:
      return state;
  }
};

export const setCardAC = (cards) => ({ type: SET_CARDS, cards });

export default galleryReducer;
