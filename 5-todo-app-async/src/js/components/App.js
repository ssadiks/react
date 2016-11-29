import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import ListTodos from '../containers/ListTodos'


const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <ListTodos />
  </div>
)

export default App