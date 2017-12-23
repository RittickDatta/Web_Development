import React, { Component } from 'react';
import uuid from 'uuid';

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
    return(
      <div>
        <h3> New Blog </h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
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
