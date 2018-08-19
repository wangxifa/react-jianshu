
import { fromJS } from 'immutable';
import * as constants from './constants';
//immutable 对象
//库

const defaultState =  fromJS({
    login:false
});

 //immutable 对象的set方法会结合之前immutble对象的值和设置的值
        //返回一个全新的对象
export default (state=defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_LOGIN:
         return state.set('login' ,action.value);
         case constants.LOGOUT:
         return state.set('login' ,action.value);
        default:
        return state;
    }
}