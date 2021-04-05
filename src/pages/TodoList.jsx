import React, { useState } from 'react'
import TodoItems from '../components/TodoItems'
import AddTodo from '../components/AddTodo'
import { Typography, Modal } from 'antd'
import TODOS from '../data/Data'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import ModalEditTodo from './../components/ModalEditTodo'

const { Title } = Typography

function TodoList(props) {
  const [todos, setTodos] = useState(TODOS)
  const [inputTask, setInputTask] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editTodoId, setEditTodoId] = useState('')
  const [editTodo, setEditTodo] = useState('')

  function handleAddChange(event) {
    setInputTask(event.target.value)
  }

  function buildNewTodo() {
    return { id: String(Date.now()), task: inputTask, completed: false }
  }

  function hanndleAdd() {
    setTodos([buildNewTodo(), ...todos])
  }

  function deleteTodo(id) {
    const filteredTodo = todos.filter((todo) => todo.id !== id)
    setTodos(filteredTodo)
  }

  function handleConfirmDeleteTodo(todoId) {
    Modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure?',
      okText: 'Ok',
      cancelText: 'Cancel',
      onOk: () => deleteTodo(todoId)
    })
  }

  const showModal = (todoId) => {
    setIsModalVisible(true)
    setEditTodoId(todoId)
  }

  function handleEditChange(e) {
    console.log(e.target.value)
    setEditTodo((todos.task = e.target.value))
  }

  function handleChangeBool(value) {
    console.log(value)
    setEditTodo((todos.completed = value))
  }

  function confirmEdit({ task, completed }) {
    const edittedTodos = todos.map((todo) => {
      return todo.id === editTodoId ? { ...todo, task, completed } : todo
    })
    setTodos(edittedTodos)
  }

  function findTodo() {
    return todos.find((todo) => todo.id === editTodoId)
  }

  return (
    <div style={{ height: '100vh', textAlign: 'center', paddingTop: 40 }}>
      <Title>Todo List</Title>
      <AddTodo onAddTodo={hanndleAdd} onAddChangeInput={handleAddChange} />
      <TodoItems
        todos={todos}
        onConfirmDeleteTodo={handleConfirmDeleteTodo}
        showModal={showModal}
      />
      <ModalEditTodo
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        todoId={editTodoId}
        todo={findTodo(editTodo)}
        onConfirmEdit={confirmEdit}
        onEditChange={handleEditChange}
        onEditChangeBool={handleChangeBool}
      />
    </div>
  )
}

export default TodoList
