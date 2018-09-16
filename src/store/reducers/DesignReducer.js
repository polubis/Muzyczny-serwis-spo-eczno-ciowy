import { updateObject } from '../updateObject';
import { SET_PAGE_MOTIVE } from '../actionTypes/actionTypes';

  const initialState = {
    motive: {
      backgroundColor: "#f2f2f2",
      mainColor: "#6AC72F",
      fontColor: "#4E342E",
    }
  };
  
  export const DesignReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_PAGE_MOTIVE:
        return updateObject(state, { motive: action.motive })
      default:
        return state;
    }
  };