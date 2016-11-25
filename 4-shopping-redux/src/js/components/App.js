import React, { Component } from 'react'
import CartContainer from '../containers/CartContainer'
import ProductContainer from '../containers/ProductContainer'
import AddProduct from '../containers/AddProduct'
import * as actions from '../actions/actions';
import { connect } from 'react-redux';

class App extends Component {
    
    componentWillMount = () => {
        this.props.getAllProducts()
    }
    
    render() {
        return (
            <div>
              <AddProduct />
              <CartContainer />
              <ProductContainer />
            </div>
        )
    }
    
}
function mapStateToProps(state) {
    console.log(state);
    console.log('toto');
  return { products: state.products };
}

export default connect(mapStateToProps, actions)(App)