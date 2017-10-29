import React, { Component } from 'react'
import styles from "./style.css";
import { Link } from 'react-router';
//import { ContestCard } from '../../shared/components/ContestCard';
import { ButtonToolbar, Button } from 'react-bootstrap';

class Contest extends Component{

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {

  }

  render() {
    console.log(this.props.params.id);
    console.log(this.props.location);
    return (
      <div>
        <h1> Test Name </h1>
        <p> id: </p>
      </div>
    );
  }
};



export default Contest
