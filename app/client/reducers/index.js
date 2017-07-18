import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    datas: (state = {text: 'hello'}, action) => {
        switch (action.type) {
            case 'add' :
                return {...state, text: action.text};
            default:
                return state
        }
    }
});

export default rootReducer;
