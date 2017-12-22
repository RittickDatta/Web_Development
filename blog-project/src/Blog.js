import React, { Component } from 'react';

class Blog extends Component{
  render(){
    return (
      <li className="Blog">
        <strong>this.props.blog.id</strong>
      </li>
    );
  }
}

export default Blog;
