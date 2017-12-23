import React, { Component } from 'react';
import Blog from './Blog.js';

class Blogs extends Component{
  deleteBlog(){
    this.props.onDelete();
  }
  render(){
    let blogs;
    if(this.props.blogs){
      blogs = this.props.blogs.map(blog =>{
        return (
          <div>
            <table width="200" border="1" align="center">
              <tbody>
                <tr>
                  <td>ID:</td>
                  <td>{blog.id}</td>
                </tr>
                <tr>
                  <td>Title:</td>
                  <td>{blog.title}</td>
                </tr>
                <tr>
                  <td>Body:</td>
                  <td>{blog.body}</td>
                </tr>
                <tr>
                  <td>Comments:</td>
                  <td>{blog.comments}</td>
                </tr>
                <tr>
                  <a href="#" onClick={this.deleteBlog.bind(this, this.props.user.id)}>X</a>
                </tr>
              </tbody>
            </table>
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
