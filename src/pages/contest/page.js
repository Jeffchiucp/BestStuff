import React, { Component } from 'react'
import styles from "./style.css";
import { Link } from 'react-router';
//import { ContestCard } from '../../shared/components/ContestCard';
import { ButtonToolbar, Button } from 'react-bootstrap';
import testData from '../../testData.js';

class ItemCard extends Component {
  render() {
    return(
      <div>
        <h2> {this.props.name} </h2>
        <p> {this.props.loc} </p>
      </div>
    );
  }
}

export default class Contest extends Component{

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {

  }

  findContestById(contests, id) {
    for (let i = 0; i < contests.length; i++) {
      console.log(contests[i]);
      if (contests[i].id == id) {
        return contests[i];
      }
    }
  }

  getItemsInContest(items) {
    return items.map((item, index) => {
      return <ItemCard key={index} loc={item.loc} name={item.name}/>
    })
  }

  render() {
    var contestId = this.props.params.id;
    var contest = this.findContestById(testData.contests, contestId);
    console.log(contest)
    console.log(this.props.params.id);
    return (
      <div className="contestContainer">
        <h1> {contest.name} </h1>
        {this.getItemsInContest(contest.items)}
      </div>
    );
  }
};
