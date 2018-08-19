import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin 0 auto;
    overflow: hidden;
`;

export const HomeLeft = styled.div`
    width: 625px;
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
    
`;

export const TopicWrapper =styled.div`
    border-bottom: 1px solid #dcdcdc;
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-left: -10px;
`;

export const TopicItem = styled.div`
    float: left;
    background: #f7f7f7;
    height: 32px;
    line-height: 32px;
    padding-right: 10px;
    margin-left: 18px;
    margin-bottom: 18px;
    font-size: 14px;
    color: #000;
    border: 1px soild #dcdcdc;
    border-radius: 4px;
    .topic-pic {
        display: block;
        float: left;
        margin-right:10px;
        width: 32px;
        height: 32px;
    }
    
`;
export const TopicMore =styled.a.attrs({
    href: '/'
})`
    text-decoration : none;
    font-size:15px;
    color: #999;
    float:left;
    margin-top: 7px;
    margin-left:20px;
`;
export const ListItem = styled.div`
    overflow: hidden;
    padding 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .listPic {
         width: 125px;
        height: 100px;
         display: block;
        float: right;
        border-radius:10px;
    }
`
export const ListInfo = styled.div`
    width: 500px;
    float: right;
    .title {
        line-height:27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 24px;
        color: #999;
    }
`;

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;

`
export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`;

export const WritterWrapper = styled.div`
    width: 278px;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    height: 300px;
    line-height: 300px;
    text-align: center;
`;

export const LoadMore = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    margin: 30px 0;
    cursor: pointer;
`;
export const BackTop = styled.div`
    position: fixed;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #ccc;
    right: 100px;
    bottom:100px;
    font-size: 14px;
`
