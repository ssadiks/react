import { FETCH_TODOS, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE, RESET_TODOS } from '../actions/actions'

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            }
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
              return state
            }
      
            return {
              ...state,
              completed: !state.completed
            }
    }
}

const todos = (state = [], action) => {
  switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ]
        case 'TOGGLE_TODO':
            return state.map(t =>
              todo(t, action)
            )
        case FETCH_TODOS:
            return { ...state, todosList: {todos: action.payload, error: null, loading: true} }
        case FETCH_TODOS_SUCCESS:// return list of posts and make loading = false
            return { ...state, postsList: {posts: action.payload, error:null, loading: false} };
        case FETCH_TODOS_FAILURE:// return error and make loading = false
            error = action.payload || {message: action.payload.message};//2nd one is network or server down errors
            return { ...state, postsList: {posts: [], error: error, loading: false} };
        case RESET_TODOS:// reset postList to initial state
            return { ...state, postsList: {posts: [], error:null, loading: false} };
        default:
            return state
    }
}

export default todos