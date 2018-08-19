import React, { PureComponent } from 'react';
import { DetailWrapper, Header, Content } from './style';
import { connect } from 'react-redux';
import { actionCreate } from './store';
 
class Detail extends PureComponent {
    render () {
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{__html:this.props.content}} />
            </DetailWrapper>
        )
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}
const mapState = (state) => ({
    title:state.getIn(['detail','title']),
    content: state.getIn(['detail','content'])
});
const mapDispatch =(dispatch) => ({
    getDetail(id) {
        dispatch(actionCreate.getDetail(id));
    }
})
export default connect(mapState,mapDispatch)(Detail);