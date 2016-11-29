import React, { Component } from 'react';
import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { fetchTodos } from '../actions/actions'


class ListTodos extends Component {
    
  componentWillMount() {
    console.log('ttokok')
    //const { dispatch } = this.props
    //dispatch(fetchTodos)
  }

  render() {
    const { todos } = this.props.todosList;    
    console.log(this.props.todosList)
    return (
      <div className="container">
        <h1>Posts</h1>
        <ul className="list-group">
          { todos.map(todo => <span>toto</span> )}
        </ul>
      </div>
    );
  }
}
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})




export default connect(
  mapStateToProps
)(ListTodos)