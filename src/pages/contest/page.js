import React, { Component } from 'react'
import styles from "./style.css";
import { Link } from 'react-router';
//import { ContestCard } from '../../shared/components/ContestCard';
import { ButtonToolbar, Button } from 'react-bootstrap';
import testData from '../../testData.js';

export default class Contest extends Component{

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {

  }

  findContestById(items, id) {
    for (let i = 0; i < items.length; i++) {
      console.log(items[i]);
      if (items[i].id == id) {
        return items[i];
      }
    }
  }

  render() {
    var itemId = this.props.params.id;
    var item = this.findContestById(testData.items, itemId);
    console.log(item)
    console.log(this.props.params.id);
    return (
      <div className="contestContainer">
        <h1> {item.name} </h1>

      </div>
    );
  }
};
