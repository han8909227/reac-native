import { createStore, combineReducers, compose } from 'redux';
import placesReducer from './reducers/places';


const rootReducer = combineReducers({
    places: placesReducer
});

const composeEnhancers = compose; 

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}


const configureStore = () => {
    return createStore(rootReducer, composeEnhancers()); // createStore expects a single reducer
};

export default configureStore; 
