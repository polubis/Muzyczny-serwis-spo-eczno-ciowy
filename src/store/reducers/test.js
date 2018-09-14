
  const initialState = {
    clients: []
  };
  
  export const testReducer = (state = initialState, action) => {
    switch (action.type) {
      case "CLEAR_RESPONSE_CLOUD":
        return {
          ...state,
          clients: null
        };
      default:
        return state;
    }
  };