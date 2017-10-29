import React, { Component } from 'react'
import styles from "./style.css";
import { Link } from 'react-router';
//import { ContestCard } from '../../shared/components/ContestCard';
import { ButtonToolbar, Button } from 'react-bootstrap';

// temporary array of JS Objects representing Contests
var testData = [
  {
    name: "Best Burrito in SF",
    dateCreated: "10/25/2017",
    id: 1,
  },
  {
    name: "Best Sushi in SF",
    dateCreated: "10/12/2017",
    id: 2,
  },
  {
    name: "Best Vegan Food in the Bay Area",
    dateCreated: "10/2/2017",
    id: 3,
  },
  {
    name: "Best Hot Dogs in SF",
    dateCreated: "10/17/2017",
    id: 4,
  },
  {
    name: "Best Burgers in Oakland",
    dateCreated: "9/18/2017",
    id: 5,
  }
]

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
    super(props)
    this.state = {}
  }

  componentWillMount() {

  }

  getAllContests() {
    // TODO: replace local test variable w/ fetch call to backend
    return testData.map((contest, index) => {
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
