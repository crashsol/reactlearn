import React, { Component } from 'react';
import { Table } from 'antd';
import { connect } from 'dva';

//链接DVA 
function mapStateToProps(state) {
    return {
        cardList: state.cards.cardsList,
        cardLoding: state.loding.effects['cards/queryList']
    };
}

class List extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'cards/queryList',
        });
    }
    render() {
        return (
            <div>
                123123
            </div>
        );
    }
}

export default connect(mapStateToProps)(List);