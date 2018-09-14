import { updateObject } from '../updateObject';

  const initialState = {
    clients: []
  };
  
  export const testReducer = (state = initialState, action) => {
    switch (action.type) {
      case "CLEAR_RESPONSE_CLOUD":
        return updateObject(state, { clients: action.clients })
      default:
        return state;
    }
  };