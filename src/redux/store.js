import { applyMiddleware, compose, createStore } from "redux";

//import { persistStore } from 'redux-persist'; //si quiera mantener lo que compre al hacer
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  // para que deploy no tire las cosas por consola
  middlewares.push(logger);
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

//export const persistor = persistStore(store);

//export default { store, persistor };
