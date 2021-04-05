import React from 'react'
import { Modal, Select, Form, Input, Button } from 'antd'

const { Option } = Select

const layout = {
  labelCol: {
    span: 8
  },
  wrapperCol: {
    span: 16
  }
}

function ModalEditTodo({
  isModalVisible,
  setIsModalVisible,
  todo,
  todoId,
  onConfirmEdit,
  onEditChange,
  onEditChangeBool
}) {
  const [form] = Form.useForm()

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Modal
      title="Edit"
      visible={isModalVisible}
      onOk={() => {
        form.submit()
        setIsModalVisible(false)
      }}
      onCancel={() => setIsModalVisible(false)}
      okText="Edit"
    >
      <Form
        {...layout}
        form={form}
        name="basic"
        onFinish={onConfirmEdit}
        onFinishFailed={onFinishFailed}
        initialValues={{
          task: todo?.task,
          completed: todo?.completed
        }}
      >
        <Form.Item
          label="Task"
          name="task"
          rules={[
            {
              required: true,
              message: 'Please input your edit task!'
            }
          ]}
        >
          <Input onChange={onEditChange} />
        </Form.Item>

        <Form.Item label="Completed" name="completed">
          <Select onChange={onEditChangeBool}>
            <Option value={true}>YES</Option>
            <Option value={false}>NO</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ModalEditTodo
