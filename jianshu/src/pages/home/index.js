import React, { PureComponent } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import { actionCreate } from './store';
import Recommend from './components/Recommend';
import { HomeWrapper,
         HomeLeft, 
         HomeRight,
         BackTop} from './style';

         
class Home extends PureComponent {
    

    handleScrollTop() {
        window.scrollTo(0, 0);
    }
    render () {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className= "banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4402/ef59bdab2dceb67d6b6d3cbed95845bf1d1a2a0e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>  
                { this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
                              
            </HomeWrapper>
            
        )
    }
    componentDidMount () {
        this.props.changeHomeData();
        this.bindEvents();
    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }
    bindEvents() {
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}
const mapDispatch = (dispatch) =>({
    changeHomeData() {
          dispatch(actionCreate.getHomeInfo());
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop> 200){
            dispatch(actionCreate.toggleTopShow(true))
        }else {
            dispatch(actionCreate.toggleTopShow(false))
        }
        console.log(document.documentElement.scrollTop);
        
    }
})
const mapState = (state) =>({
    showScroll: state.getIn(['home','showScroll'])
})
export default connect(mapState,mapDispatch)(Home);