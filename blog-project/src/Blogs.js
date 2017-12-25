import React, { Component } from 'react';
import image from './image.jpg';
import coffee from './coffee.jpg';
import creativeText from './creativeText.jpg';

class Blogs extends Component{

  constructor(){
    super();
  }

  handleSubmit(e){
    if(this.refs.comment.value === ''){
      alert('No Comment Entered.')
    } else {
      console.log(this.refs.comment.value);
      console.log(this.props.user.blogs[0].comments[0]);
      this.props.user.blogs[0].comments.push(this.refs.comment.value);
    }
    e.preventDefault();
  }

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
                  <img src={blog.picture} alt="Blog Image" height="100" width="300"/>
                </tr>
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
                  <td> {this.props.user.blogs[0].comments}</td>
                </tr>

                <div>
                  <h3> Comments </h3>
                  <form onSubmit={this.handleSubmit.bind(this)}>
                    <div>
                      <label>Comments</label><br/>
                      <input type="text" ref="comment"/>
                    </div>
                    <br/>
                      <input type="submit" value="Post"/>
                    <br/>
                  </form>
                </div>



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
