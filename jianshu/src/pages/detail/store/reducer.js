
import { fromJS } from 'immutable';
import * as constants from './constants';
//immutable 对象
//库

const defaultState =  fromJS({
  title: '',
  content: ''
});

export default (state=defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_DETAIL:
        return state.merge({
            title: action.title,
            content: action.content
        })
        default:
        return state;
    }
}