import React,{ Component } from 'react';
import Users from './Users';

class Dashboard extends Component{

  render(){
      let blogItems = [];
      if(this.props.users){
        //TODO
      }
      return (
        <div className="Dashboard">
          <h2>All Blogs</h2>
          {blogItems}
        </div>
      );
  }
}

export default Dashboard;
