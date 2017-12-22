import React, { Component } from 'react';
import Blog from './Blog.js';

class Blogs extends Component{
  render(){
    let blogs;
    if(this.props.blogs){
      blogs = this.props.blogs.map(blog =>{
        return (
          <div>
          ID: {blog.id}<br />
          Title: {blog.title}<br />
          Body: {blog.body}<br />
          Comments: {blog.comments}
          </div>
          //<Blog blog={blog}/>
        );
      });
    }
    return (
      <div className="Blogs">
        {blogs}
      </div>
    );
  }
}

export default Blogs;
