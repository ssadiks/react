import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import PostsFiltering from '../views/PostsFiltering'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const PostsFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsFiltering)

export default PostsFilterContainer