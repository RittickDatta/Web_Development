import React, { Component } from 'react';

import './RecipieApp.css';
import Recipie from './Recipie';
import Navbar from './navbar.js';
import RecipeList from './RecipeList';
import './RecipeList.css';

class RecipieApp extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
       <RecipeList />
      </div>
    );
  }
}

export default RecipieApp;
