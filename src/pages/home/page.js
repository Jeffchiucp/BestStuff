import React, { Component } from 'react'
import styles from "./style.css";
import { Link } from 'react-router';
//import { ContestCard } from '../../shared/components/ContestCard';
import { ButtonToolbar, Button } from 'react-bootstrap';
import testData from '../../testData.js';

class ContestCard extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Link to={ `/contest/${this.props.id}` } className={styles.contestCard}>
        <h3> {this.props.name} </h3>
      </Link>
    );
  }
}

class Home extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {

  }

  getAllContests() {
    // TODO: replace local test variable w/ fetch call to backend
    return testData.items.map((contest, index) => {
      return <ContestCard key={index} name={contest.name} id={contest.id}/>
    })
  }

  render() {
    return (
      <div className={styles.content}>
        <h1 className="page-title">iHangry</h1>
        {/*<Link to="/about" className="btn">About page &rarr;</Link>*/}
        {this.getAllContests()}
      </div>
    );
  }
};

export default Home
