import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import profileReducer from "./profile/reducer";
import { RootState } from "../domain/entity/rootState";
import collegesReducer from "./colleges/reducer";
import validationReducer from "./validation/reducer";

const store = createStore(
  combineReducers<RootState>({
    profile: profileReducer,
    // 以下を追加
    colleges: collegesReducer,
    validation: validationReducer
  }),
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;