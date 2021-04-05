import React from 'react'
import { Input, Button } from 'antd'

function AddTodo(props) {
  return (
    <div style={{ textAlign: 'center', width: 550, margin: 'auto' }}>
      <Input
        placeholder="Add New Task"
        style={{
          display: 'inline-block',
          width: 300,
          margin: 15,
          height: 50,
          fontSize: 18
        }}
        onChange={props.onAddChangeInput}
      />
      <Button
        type="primary"
        style={{ height: 50, fontSize: 18 }}
        onClick={props.onAddTodo}
      >
        Add
      </Button>
    </div>
  )
}

export default AddTodo
