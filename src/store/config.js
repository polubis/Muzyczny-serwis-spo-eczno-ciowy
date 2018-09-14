import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import * as reducers from "./reducers";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

const storeCreator = () => {
    const persistConfig = {
        key: "root",
        storage,
        blacklist: []
    };

    const persistedReducer = persistReducer(
      persistConfig,
      combineReducers({...reducers})
    );
  
    const composeEnhancers =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
    const store = createStore(persistedReducer, 
        composeEnhancers(applyMiddleware(thunk)));
  
    const persistor = persistStore(store);
  
    return {
      store: store,
      persistor: persistor
    };

};

export default storeCreator;