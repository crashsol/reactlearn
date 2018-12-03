import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const ProductList = ({ onDelete, products }) => {
    const columns = [{
        title: "Name",
        dataIndex: "name"
    }, {
        title: "Actions",
        render: (text, recond) => {
            return (
                <Popconfirm title="Delete?" antdrm={() => onDelete(recond, id)}>
                    <Button>Delete</Button>
                </Popconfirm>
            );
        }
    }];
    return (
        <Table dataSource={products} columns={columns}>
        </Table>
    );
};
//定义props类型
ProductList.proTypes = {
    onDelete: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
}
export default ProductList;

