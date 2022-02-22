import {
  GET_CATEGORIES_REQUEST,
  GET_BANNERS_REQUEST,
  GET_DATA_REQUEST_SUCCESS,
} from "./HomeTypes";

const INITIAL_STATE = {
  cart: {
    totalCount: 0
  }
};

export default function HomeSlice(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_CATEGORIES_REQUEST:
      return {
        ...state,
        categories: action.payload
      };
      case GET_BANNERS_REQUEST:
        return state;
        case GET_DATA_REQUEST_SUCCESS:
          return {
            ...state,
            ...action.payload
          };
    default:
      return state;
  }
};


