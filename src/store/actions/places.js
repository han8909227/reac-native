import {ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE} from './actionTypes';


export const addPlace = (placeName) => {
    return {
        type: ADD_PLACE,
        placeName: placeName
    };
};

export const deletePlace = () => {
    return {
        type: DELETE_PLACE
    };
};

export const selectPlace = () => {
    return {
        type: SELECT_PLACE,
        placekey: key
    };
};

export const deselectPlace = () => {
    return { 
        type: DELETE_PLACE
    }
}

// this is an action creator file