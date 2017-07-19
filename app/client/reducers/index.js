import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    datas   : (state = {text: 'hello'}, action) => {
        switch (action.type) {
            case 'add' :
                return {...state, text: action.text};
            default:
                return state
        }
    },
    demoForm: (state = {text: ''}, action) => {
        return state
    },
    form    : formReducer
});

export default rootReducer;
