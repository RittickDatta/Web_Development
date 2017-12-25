import React, { Component } from 'react';
import Blogs from './Blogs.js';

class Users extends Component{
  deleteBlog(id){
    this.props.onDelete(id);
  }



  render(){
    let users;
    if(this.props.users){
      users = this.props.users.map(user => {
        return (
          <div>
            <Blogs onDelete={this.deleteBlog.bind(this)} user={user} key={user.id} blogs={user.blogs} />
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
