import React from "react";
import { connect } from 'react-redux';
import store from '../../store';
import { Link } from 'react-router';

import * as marvelApi from '../../api/marvel-api';


import MarvelInfos from "../views/MarvelInfos";

const MarvelContainer = React.createClass({
  
  /* Get Post By Id Url */
  componentDidMount() {
    let marvelId = this.props.params.charactersId    
    marvelApi.getMarvel(marvelId)
  },
  render() {
    return (
      <div>
        <MarvelInfos marvel={this.props.marvel} />
        <Link className="button" to={'characters'}>Back</Link>
      </div>
    );
  }
})

//<div>
//    <MarvelInfos marvel={this.props.marvel} />
//    <ComicsList marvel={this.props.marvel} />
//    <SeriesList marvel={this.props.marvel} />
//    <Link className="button" to={'posts'}>Back</Link>
//</div>

const mapStateToProps = function(store) {
  return {
    marvel: store.marvelsState.marvel
  }
}

export default connect(mapStateToProps)(MarvelContainer);