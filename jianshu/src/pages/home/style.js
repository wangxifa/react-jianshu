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
    width: 240px;
    float: right;
    
`;

export const TopicWrapper =styled.div`
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
`