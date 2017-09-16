import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux'

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
    form    : formReducer,
    routing: routerReducer
});

export default rootReducer;
