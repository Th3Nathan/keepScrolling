import React from 'react';
import { Link, withRouter } from 'react-router';
import PostBar from '../post_bar/post_bar';

class Dashboard extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillUpdate(newProps, nextState){

  }

  componentWillMount(){
    // document.body.style.background = "#36465d";
  }


  render() {

    return (
      <div className="Dashboard">
          <center>
          <PostBar />
          <h1>|bar  | recommendations|</h1>
          <h1>|feed | radar          | </h1>
          <h1>|     |                |</h1>
          <h1>|bar  | recommendations|</h1>
          <h1>|feed | radar          | </h1>
          <h1>|     |                |</h1>
          <h1>|bar  | recommendations|</h1>
          <h1>|feed | radar          | </h1>
          <h1>|     |                |</h1>
          <h1>|bar  | recommendations|</h1>
          <h1>|feed | radar          | </h1>
          <h1>|     |                |</h1>
          <h1>|bar  | recommendations|</h1>
          <h1>|feed | radar          | </h1>
          <h1>|     |                |</h1>
          <h1>|bar  | recommendations|</h1>
          <h1>|feed | radar          | </h1>
          <h1>|     |                |</h1>
          <h1>|bar  | recommendations|</h1>
          <h1>|feed | radar          | </h1>
          <h1>|     |                |</h1>
          <h1>|bar  | recommendations|</h1>
          <h1>|feed | radar          | </h1>
          <h1>|     |                |</h1>
          <h1>|bar  | recommendations|</h1>
          <h1>|feed | radar          | </h1>
          <h1>|     |                |</h1>
          <h1>|bar  | recommendations|</h1>
          <h1>|feed | radar          | </h1>
          <h1>|     |                |</h1>
          <h1>|bar  | recommendations|</h1>
          <h1>|feed | radar          | </h1>
          <h1>|     |                |</h1>
          <h1>|bar  | recommendations|</h1>
          <h1>|feed | radar          | </h1>
          <h1>|     |                |</h1>
          </center>
      </div>
    );

  }

}

export default withRouter(Dashboard);
