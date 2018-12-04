import React, {
    Component
} from "react";

import {
    Table, Modal, Button, Form, Input
} from 'antd'
import {
    connect
} from 'dva'

const FormItem = Form.Item;
/* 从  model中获取数据 */
function mapStateToProps(state) {
    return {
        cardsList: state.cards.cardsList,
        cardsLoading: state.loading.effects['cards/queryList']
    }
}


class List extends Component {

    state = {
        visible: false
    }
    componentDidMount() {
        this.props.dispatch({
            type: 'cards/queryList'
        })
    }

    showModal = () => {
        this.setState({
            visible: true
        })
    }

    columns = [{
        title: '名称',
        dataIndex: 'name',
    },
    {
        title: '描述',
        dataIndex: 'desc',
    },
    {
        title: '链接',
        dataIndex: 'url',
        render: value => <a href={value}>{value}</a>,
    }]

    handleCancel = () => {
        this.setState({
            visible: false
        })
    }

    handleOk = () => {
        const { dispatch, form: { validateFields } } = this.props;
        //使用 validateFields 验证表单
        validateFields((err, values) => {
            if (!err) {
                //发送添加事件
                dispatch({
                    type: 'cards/addOne',
                    payload: values,
                })
                // 重置 `visible` 状态
                this.setState({
                    visible: false
                })

            }
        })
    }


    render() {

        const { cardsList, cardsLoading } = this.props;
        const { visible } = this.state;
        //从属性中获取创建表单所需的主要函数
        const { form: { getFieldDecorator } } = this.props;
        return (
            <div>
                <Table columns={this.columns} dataSource={cardsList}></Table>
                <br />
                <br />
                <Button onClick={this.showModal} type="default">新建记录</Button>
                <Modal title="新建记录" visible={visible}
                    onCancel={this.handleCancel}
                    onOk={this.handleOk}
                >
                    <Form>
                        <FormItem label="名称">
                            {
                                getFieldDecorator('name', {
                                    rules: [{ required: true }]
                                })(<Input placeholder="请输入名称" />)
                            }
                        </FormItem>
                        <FormItem label="描述">
                            {
                                getFieldDecorator('desc', {
                                    rules: [{ required: true, message: '必须输入描述' }]
                                })(<Input placeholder="输入描述" />)
                            }
                        </FormItem>

                        <FormItem label="链接">
                            {
                                getFieldDecorator('url', {
                                    rules: [{ type: 'url', message: '请输入正确的链接' }]
                                })(<Input />)
                            }
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}

// 表单， antd提供了强大的表单组件，
// 使用Form.create()创建表单, Form.create()(List)
// 通过connect导入创建表单所需的属性
export default connect(mapStateToProps)(Form.create()(List));