import React, { Component } from 'react';

import './RecipieApp.css';
import Recipie from './Recipie';
import Navbar from './navbar.js';
import RecipeList from './RecipeList';
import './RecipeList.css';
import RecipeInput from './RecipeInput';

class RecipieApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: [
      {
        id:0,
        title: "Spaghetti",
        instructions: "Open jar of Spaghetti sauce.  Bring to simmer.  Boil water.  Cook pasta until done.  Combine pasta and sauce",
        ingredients: ["pasta", "8 cups water", "1 box spaghetti"],
        img: "https://cms.splendidtable.org/sites/default/files/styles/w2000/public/Spaghetti-Pic__Photocredit-David-Loftus-LEDE.jpg?itok=-7KB2KCR"
      },
      {
        id:1,
        title: "Milkshake",
        instructions: "Combine ice cream and milk.  Blend until creamy",
        ingredients: ["2 Scoops Ice cream", "8 ounces milk"],
        img: "data:image/jpeg;base64,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"
      },
      {
        id:2,
        title: "Avocado Toast",
        instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
        ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
        img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/12/11/0/FNK_All-the-Avocado-Toast_s4x3.jpg.rend.hgtvcom.616.462.suffix/1450059496131.jpeg"
      }
    ],
    nextRecipeId: 3,
    showForm: false
    }
    
    this.handleSave = this.handleSave.bind(this);
    this.onDelete =this.onDelete.bind(this);
  }
  
  handleSave(recipe){
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm:false
      }
    });
  }
  
  onDelete(id){
    const recipes = this.state.recipes.filter(r => r.id != id);
    this.setState({recipes});
  }
  
  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
      <Navbar onNewRecipe={() => this.setState({showForm: true})}/>
        {showForm ? 
        <RecipeInput 
        onSave = {this.handleSave}
        onClose={() => this.setState({showForm: false})}
        /> : null }
       <RecipeList onDelete={this.onDelete} recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default RecipieApp;
