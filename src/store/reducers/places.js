
import { ADD_PLACE, DELETE_PLACE, DESELECT_PLACE, SELECT_PLACE } from '../actions/actionTypes';

const initialState = {
    places: [], 
    selectedPlace: null
};


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLACE: 
            return {
                ...state, // copy the old state properties, new property will override other will be kept
                places: state.places.concat({
                    key: Math.random(), 
                    name: action.placeName,
                    image: {
                        uri: "https://www.colorado.com/sites/default/files/CTO_18_VoiceOfColorado_DSC04337_rgb.jpg"
                    }
                }) // in redux always return a new state => immutability
            };
        
        case DELETE_PLACE: 
            return {
                ...state,
                places: state.places.filter(p => {
                    return p.key !== state.selectedPlace.key;
                }),
                selectedPlace: null
            };

        case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find(p => {
                    return p.key == action.placeKey;
                })
            };

        case DESELECT_PLACE:
            return {
                ...state,
                selectedPlace: null
            };

        default:
            return state;
    }
};

export default reducer;