import { createStore, combineReducers } from 'redux';
import placesReducer from './reducers/places';


const rootReducer = combineReducers({
    places: placesReducer
});


const configureStore = () => {
    return createStore(rootReducer); // createStore expects a single reducer
};

export default configureStore; 
