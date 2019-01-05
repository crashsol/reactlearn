import { Modal, Form, Input } from 'antd';
import { Component } from 'react';

const FormItem = Form.Item;

class UserEditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visiable: false,
    };
  }

  showModalHandle = e => {
    if (e) e.stopPropagation();
    this.setState({
      visiable: true,
    });
  };

  hideModalHandle = () => {
    this.setState({
      visiable: false,
    });
  };

  okHandle = () => {
    const { onOk } = this.props;
    /* 验证表单是否合法 */
    this.props.form.validateFields((err, values) => {
      if (!err) {
        onOk(values);
        this.hideModalHandle();
        console.log(values);
        console.log(this.state.visiable);
      }
    });
  };

  render() {
    const { children } = this.props;
    const { getFieldDecorator } = this.props.form;
    const { name, email, website } = this.props.record;
    const formItemLayout = {
      labelCol: { span: 6 },
      wapperCol: { span: 14 },
    };
    return (
      <span>
        <span onClick={this.showModalHandle}>{children}</span>
        <Modal
          title="Edit User"
          visible={this.state.visiable}
          onOk={this.okHandle}
          onCancel={this.hideModalHandle}
        >
          <Form horizontal="true" onSubmit={this.okHandle}>
            <FormItem {...formItemLayout} label="Name">
              {getFieldDecorator('name', {
                initialValue: name,
              })(<Input />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Email">
              {getFieldDecorator('email', {
                initialValue: email,
              })(<Input />)}
            </FormItem>
            <FormItem {...formItemLayout} label="WebSite">
              {getFieldDecorator('website', {
                initialValue: website,
              })(<Input />)}
            </FormItem>
          </Form>
        </Modal>
      </span>
    );
  }
}

export default Form.create()(UserEditModal);
