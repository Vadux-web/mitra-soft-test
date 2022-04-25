let SET_CARDS = "SET-CARDS";

let initialState = {
  cards: [
    // {
    //   albumId: 1,
    //   id: 1,
    //   title: "accusamus beatae ad facilis cum similique qui sunt",
    //   url: "https://via.placeholder.com/600/92c952",
    //   thumbnailUrl: "https://via.placeholder.com/150/92c952",
    // },
    // {
    //   albumId: 1,
    //   id: 2,
    //   title: "reprehenderit est deserunt velit ipsam",
    //   url: "https://via.placeholder.com/600/771796",
    //   thumbnailUrl: "https://via.placeholder.com/150/771796",
    // },
  ],
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
