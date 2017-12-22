import React, { Component } from 'react';
import backbone from './backbone.png';
import uuid from 'uuid';
import './App.css';
import Users from './Users';

class App extends Component {

  constructor(){
    super();
    this.state={
      users: [
        {
          id:uuid.v4(),
          blogs:[]
        },
        {
          id:uuid.v4(),
          blogs:[]
        }
      ],
      dashboardBlogs: []
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={backbone} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Blogger</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <Users users={this.state.users}/>
        </p>
      </div>
    );
  }
}

export default App;
