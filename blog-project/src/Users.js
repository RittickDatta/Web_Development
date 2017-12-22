import React, { Component } from 'react';
import Blogs from './Blogs.js';

class Users extends Component{
  render(){
    let users;
    if(this.props.users){
      users = this.props.users.map(user => {
        return (
          <Blogs key={user.id} blogs={user.blogs} />
        );
      });
    }
    return (
      <div className="Users">
        <h2>Users</h2>
          {users}
      </div>
    );
  }
}

export default Users;
