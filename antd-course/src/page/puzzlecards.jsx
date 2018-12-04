import React, { Component } from 'react';
import { Card, Button } from 'antd'
import { connect } from "dva";
// dva管理命名空间
const namespace = 'puzzlecards';

/* 
顾名思义就是把
 dva model 中的 state 通过组件的 props 注入给组件。
 通过实现这个函数，我们就能实现把 dva model 的 state 注入给组件。
  */
//入参 state 其实是 dva 中所有 state 的总合
//本案例中获取指定namespace下的 state
const mapStateToProps = (state) => {
    const cardList = state[namespace].data;
    return {
        cardList,
    }
}
/* 获取事件管理 */
const mapDispatchToProps = (dispatch) => {

    return {
       /*  onClickAdd: (newCard) => {
            const action = {
                type: `${namespace}/addNewCard`,
                payload: newCard,
            };
            // 发布一个action事件，
            // 该事件会被dva中的type为 ${namespace}/addNewCard， reducer执行
            dispatch(action);
        }, */
        onDidMount:() =>{

             dispatch({
                 type: `${namespace}/queryInitCards`,
             })   
        }
    }

}

/* 将dva管理的状态和组件管理起来 */
class PuzzleCards extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        //挂在时调用 dva 中的 queryInitCards 方法
        this.props.onDidMount();
    }
    render() {
        return (
            <div>
                {
                    this.props.cardList.map(card => {
                        return (
                            <Card key={card.id}>
                                <div>
                                    Q: {card.setup}
                                </div>
                                <div>
                                    <strong>
                                        A: {card.punchline}
                                    </strong>
                                </div>
                            </Card>
                        )


                    })
                }
                <div style={{ marginTop: 20 }}>
                    <Button /* onClick={()=> this.props.onClickAdd({
                          setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                          punchline: 'here we use dva',
                    })} */>添加卡片</Button>
                </div>

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PuzzleCards);