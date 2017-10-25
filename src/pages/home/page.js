import React, { Component } from 'react'
import styles from "./style.css";
import { Link } from 'react-router';
import { ButtonToolbar, Button } from 'react-bootstrap';


class Home extends Component{

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    
  }

  render() {
    return (
      <div className={styles.content}>
        <h1 className="page-title">iHangry</h1>
        <Link to="/about" className="btn">About page &rarr;</Link>
      </div>
    );
  }
};

export default Home
