import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommendItem, RecommendWrapper } from '../style';
class Recommend extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <RecommendWrapper > 
        {
          list.map((item) => {
            return <RecommendItem imgUrl={item.get('imgUrl')} alt="" key={item.get('id')} />               
          })
        } 
      </RecommendWrapper>
    )
  }
}
const mapState = (state) => ({
  // list: state.get('home').get("articleList")
  list: state.getIn(['home', 'recommendList'])
})
export default connect(mapState, null)(Recommend);