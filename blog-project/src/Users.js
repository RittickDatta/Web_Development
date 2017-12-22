import React, { Component } from 'react';
import Blogs from './Blogs.js';

class Users extends Component{
  render(){
    let users;
    if(this.props.users){
      users = this.props.users.map(user => {
        return (
          <div>
            //{user.id}
            <Blogs key={user.id} blogs={user.blogs} />
            <br />
          </div>
        );
      });
    }
    return (
      <div className="Users">
          <p>{users}</p>
      </div>
    );
  }
}

export default Users;
