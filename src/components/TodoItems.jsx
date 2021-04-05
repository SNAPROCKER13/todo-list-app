import React from 'react'
import TodoCard from './TodoCard'
import { List, Typography } from 'antd'

const { Text } = Typography

function TodoItems({ todos, ...props }) {
  return (
    <div style={{ width: 550, margin: 'auto' }}>
      <List size="large" bordered>
        {todos.map((todo) => {
          return (
            <List.Item key={todo.id}>
              <TodoCard
                id={todo.id}
                onConfirmDeleteTodo={props.onConfirmDeleteTodo}
                showModal={props.showModal}
              >
                <Text
                  strong
                  delete={todo.completed}
                  style={{ display: 'inline-block', width: 150, fontSize: 18 }}
                >
                  {todo.task}
                </Text>
              </TodoCard>
            </List.Item>
          )
        })}
      </List>
    </div>
  )
}

export default TodoItems
