import React, { Component } from 'react';
import backbone from './backbone.png';
import uuid from 'uuid';
import './App.css';
import Users from './Users';
import NewBlog from './NewBlog';

class App extends Component {

  constructor(){
    super();
    this.state={
      users: [
        {
          id:uuid.v4(),
          blogs:[
            {
            id:uuid.v4(),
            title:'Blog 1',
            body:'This is blog 1.',
            comments: [
                        'This is comment on blog 1.'
                      ]
            }
            ]
        },
        {
          id:uuid.v4(),
          blogs:[
            {
            id:uuid.v4(),
            title:'Blog 2',
            body:'This is blog 2.',
            comments: [
                        'This is comment on blog 2.'
                      ]
            }
            ]
        }
      ],
      dashboardBlogs: []
    }
  }

  handleAddBlog(blog){
    let users = this.state.users;
    let user = users[0];
    user.blogs.push(blog);
    users[0] = user;
    this.setState({users: users});
  }

  handleDeleteBlog(id){
    let users = this.state.users;
    let user = users[0];
    let blogs = user.blogs;
    let index = blogs.findIndex(x => x.id === id);
    blogs.splice(index, 1);
    user.blogs = blogs;
    users[0] = user;
    this.setState({users: users});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={backbone} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Blogger</h1>
        </header>
        <p className="App-intro">

        </p>
        <p>
          <NewBlog newBlog={this.handleAddBlog.bind(this)}/>
          <Users users={this.state.users}/>
        </p>
      </div>
    );
  }
}

export default App;
