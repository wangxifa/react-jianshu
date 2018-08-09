
import { fromJS } from 'immutable';

//immutable 对象
//库

const defaultState =  fromJS({
    topicList: [{
        id:1,
        title:"手绘",
        imgUrl:"https://upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
        
    },{
        id: 2,
        title: "自然科普",
        imgUrl:"https://upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },{
        id:3,
        title:"读书",
        imgUrl:"https://upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },{
        id:4,
        title:"故事",
        imgUrl:"https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },{
        id:5,
        title:"摄影",
        imgUrl:"https://upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },{
        id:6,
        title:"简书电影",
        imgUrl:"https://upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    },{
        id:7,
        title:"@IT互联网",
        imgUrl:"https://upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64"
    }]
});

 //immutable 对象的set方法会结合之前immutble对象的值和设置的值
        //返回一个全新的对象
export default (state=defaultState, action) => {
    switch(action.type) {
        default:
        return state;
    }
}