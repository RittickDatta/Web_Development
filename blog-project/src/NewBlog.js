import React, { Component } from 'react';
import uuid from 'uuid';
import image from './image.jpg';
import coffee from './coffee.jpg';
import creativeText from './creativeText.jpg';

class NewBlog extends Component{
  constructor(){
    super();
    this.state = {
      newBlog:{}
    }
  }



  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('Title is Required.');
    } else {
      this.setState({newBlog:{
        picture: this.refs.blogImage.value,
        id: uuid.v4(),
        title: this.refs.title.value,
        body: this.refs.body.value,
        comments: ''
      }}, function(){
        this.props.newBlog(this.state.newBlog);
      });
    }
    e.preventDefault();
  }

  render(){
    let imageOptions = ['image.jpg','coffee.jpg','creativeText.jpg'].map(img => {
      return <option key={img} value={img}>{img}</option>
    });
    return(
      <div>
        <h3> New Blog </h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Select Image</label><br />
            <select ref="blogImage">
              {imageOptions}
            </select>
          </div>
          <div>
            <label>Title</label><br/>
            <input type="text" ref="title"/>
          </div>
          <div>
            <label>Body</label><br/>
            <input type="textarea" ref="body"/>
          </div>
          <br/>
            <input type="submit" value="Submit"/>
          <br/>
        </form>
      </div>
    );
  }

}

export default NewBlog;
