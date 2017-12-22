import React, { Component } from 'react';
import Blog from './Blog.js';

class Blogs extends Component{
  render(){
    let blogs;
    if(this.props.blogs){
      blogs = this.props.blogs.map(blog =>{
        return (
          <Blog blog={blog}/> //INSERT KEY HERE
        );
      });
    }
    return (
      <div className="Blogs">
        <h2>Blogs</h2>
        {blogs}
      </div>
    );
  }
}

export default Blogs;
