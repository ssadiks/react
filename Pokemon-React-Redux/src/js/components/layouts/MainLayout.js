import React from 'react';
import { Link } from 'react-router';

export default class MainLayout extends React.Component {
  render() {
    return (
      <div className="app">
        <header className="primary-header"></header>
        <aside className="primary-aside">
          <ul className="vertical medium-horizontal menu">
            <li>P O K E M O N S | T E S T</li>
            <li><Link to="/" activeClassName="active">Home</Link></li>
            <li><Link to="/pokemons" activeClassName="active">Pokemons</Link></li>
          </ul>
        </aside>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
};
