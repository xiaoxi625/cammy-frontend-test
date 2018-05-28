import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

// export const SEND_MESSAGE = 'SEND_MESSAGE';
// export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
// export const SEND_MESSAGE_FAILED = 'SEND_MESSAGE_FAILED';
//
// export const PERSIST_MESSAGE = 'PERSIST_MESSAGE';
// export const PERSIST_MESSAGE_SUCCESS = 'PERSIST_MESSAGE_SUCCESS';
// export const PERSIST_MESSAGE_FAILED = 'PERSIST_MESSAGE_FAILED';


const contactsReducer = (state = {}, action) => {
  switch(action.type) {
    case 'SEND_MESSAGE_SUCCESS':
      return action.payload;
    case 'SEND_MESSAGE_FAILED':
      return action.payload;
    default:
      return state;
  }
};

export const reducers = combineReducers({
  routing: routerReducer,
  contacts: contactsReducer
});



