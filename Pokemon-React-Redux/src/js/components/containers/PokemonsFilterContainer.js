import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import PokemonsFiltering from '../views/PokemonsFiltering'

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

const PokemonsFilterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonsFiltering)

export default PokemonsFilterContainer