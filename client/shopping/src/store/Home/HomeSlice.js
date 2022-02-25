import {
  GET_DATA_REQUEST_SUCCESS,
  ADD_SELECTED_KEY_REQUEST
} from "./HomeTypes";

const INITIAL_STATE = {
  cart: {
    totalCount: 0,
    items: [],
  },
};

export default function HomeSlice(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_DATA_REQUEST_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case ADD_SELECTED_KEY_REQUEST:
      return {
        ...state,
        selectedCategory: action.payload
      }
    default:
      return state;
  }
}
