export const SET_DETAILS = "SET-DETAILS";

const initialState = {
  details: null,
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DETAILS: {
      return { ...state, details: action.details };
    }
    default:
      return state;
  }
};

export const setDetailsAC = (details) => ({ type: SET_DETAILS, details });

export default detailsReducer;
