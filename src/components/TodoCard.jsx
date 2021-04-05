import React from 'react'
import { Card, Button } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

function TodoCard(props) {
  return (
    <Card style={{ width: 500 }}>
      {props.children}
      <Button
        onClick={() => props.showModal(props.id)}
        shape="round"
        style={{ marginRight: 10 }}
      >
        <EditOutlined />
      </Button>
      <Button
        type="primary"
        shape="round"
        danger
        onClick={() => props.onConfirmDeleteTodo(props.id)}
      >
        <DeleteOutlined />
      </Button>
    </Card>
  )
}

export default TodoCard
