export const SET_CARDS = "SET-CARDS";
export const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
export const REQUEST_CARDS = "REQUEST-CARDS";

let initialState = {
  cards: [],
  isFetching: false,
};

const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CARDS:
      return {
        ...state,
        cards: action.cards,
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };

    default:
      return state;
  }
};

export const setCardsAC = (cards) => ({ type: SET_CARDS, cards });

export const toggleIsFetchingAC = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export default galleryReducer;
