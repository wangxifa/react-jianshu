import React, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import { HomeWrapper,
         HomeLeft, 
         HomeRight} from './style';

class Home extends Component {
    render () {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className= "banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4361/599ae85090db0f4a4cb3cca4d7aeb645f6cc91f0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>                
            </HomeWrapper>
            
        )
    }
}
export default Home;