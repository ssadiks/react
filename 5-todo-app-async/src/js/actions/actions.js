import axios from 'axios';
let nextTodoId = 0;

//Todo list
export const FETCH_TODOS = 'FETCH_TODOS';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';
export const RESET_TODOS = 'RESET_TODOS';

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3030/api' : '/api';

export function fetchTodos() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/todos`,
    headers: []
  });

  return {
    type: FETCH_TODOS,
    payload: request
  };
}
export function fetchTodosSuccess(todos) {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: todos
  };
}

export function fetchTodosFailure(error) {
  return {
    type: FETCH_TODOS_FAILURE,
    payload: error
  };
}

/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    text,
    id: nextTodoId++
})

export const toggleTodo = (id) => ({
    type : 'TOGGLE_TODO',
    id
})

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})
