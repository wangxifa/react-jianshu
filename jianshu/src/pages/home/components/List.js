import React, { PureComponent } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from "react-redux";
import { actionCreate } from '../store';
import { Link } from 'react-router-dom' 
class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props;

    return (
      <div>
        {
          list.map((item, index ) => {
            return (
              // key={item.get('id')}
              <Link key={index} to='/detail'> 
              <ListItem >  
                <img className="listPic" src={item.get('imgUrl')} alt="" />
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
              </Link>
            )
          })
        }

        <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
      </div>
    )
  }
}
const mapState = (state) => ({
  // list: state.get('home').get("articleList")
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home','articlePage'])
})
const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreate.getMoreList(page))
  }
})
export default connect(mapState, mapDispatch)(List);