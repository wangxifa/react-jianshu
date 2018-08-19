
import { fromJS } from 'immutable';
import * as constants from './constants';
//immutable 对象
//库

const defaultState =  fromJS({
    topicList: [],
    articleList: [],
    recommendList:[],
    articlePage: 1,
    showScroll: false,
});

 //immutable 对象的set方法会结合之前immutble对象的值和设置的值
        //返回一个全新的对象
export default (state=defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_HOME_DATA:
        return state.merge({
            topicList:fromJS(action.topicList),
            articleList:fromJS(action.articleList),
            recommendList:fromJS(action.recommendList),
            
        });
        case constants.ADD_ARTICLE_LIST:
        return state.merge({
            'articleList': state.get('articleList').concat(action.list),
            'articlePage': action.nextPage
        });
        case constants.TOGGLE_SCROLL_SHOW:
        return state.set('showScroll',action.show)

        default:
        return state;
    }
}