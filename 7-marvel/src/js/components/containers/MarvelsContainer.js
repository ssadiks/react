import React from "react";
import { connect } from 'react-redux';
import store from '../../store';

import MarvelsList from "../views/MarvelsList";
import * as marvelApi from '../../api/marvel-api';

const MarvelsContainer = React.createClass({  
  /* Get Posts */
  componentDidMount() {
    marvelApi.getMarvels();
  },
  render() {
    return (
      <div>
        <MarvelsList marvels={this.props.marvels} />
      </div>
    );
  }  
})

const mapStateToProps = function(store) {
  return {
    marvels: store.marvelsState.marvels
  };
};

export default connect(mapStateToProps)(MarvelsContainer);