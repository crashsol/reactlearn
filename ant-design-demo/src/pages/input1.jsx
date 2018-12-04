import React, { Component } from 'react'
import { Input, Row, Col } from 'antd';
const Search = Input.Search

export default class input1 extends Component {

    render() {
        return (

            <div >
                <Row gutter={'48'}>
                    <Col span={'12'}>
                        <Input placeholder="请输入" />
                    </Col>
                    <Col span={'12'}>
                        <Search placeholder='输入搜索' ></Search>
                    </Col>
                </Row>
                <Row gutter={'48'} style={{ marginTop: '20px' }}>
                    <Col span={'12'}>
                        <Search placeholder='input search'
                            onSearch={(value) => console.log(value)} />
                    </Col>
                    <Col span={'12'}>
                        <Search placeholder='input search'
                            enterButton="Search"
                            onSearch={(value) => console.log(value)} />
                    </Col>
                </Row>
                
                <Col span={'12'}>
                    <Search placeholder='input search'
                        enterButton
                        onSearch={(value) => console.log(value)} />
                </Col>
            </div>
        )
    }
}
