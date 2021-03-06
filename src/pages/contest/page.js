import React, { Component } from 'react'
import styles from "./contestStyle.css";
import { Link } from 'react-router';
import paperKit from "../../../public/pk2-pro-html-v2/assets/css/paper-kit.css";
import { ButtonToolbar, Button } from 'react-bootstrap';
import testData from '../../testData.js';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import MapContainer from '../../components/MapContainer';
const MAPS = "AIzaSyBBYy-u-ZsF-3krZWO2fpqp2LYp2noQRbs";
const PLACES = "AIzaSyCh4He2DUJ9cCgC6kl31vAmpSH2cqGq0r4";

class ItemCard extends Component {
  render() {
    return(
      <div className={paperKit.card} style={{paddingLeft:40, paddingBottom:20}}>
        <h2 className={paperKit.cardTitle}> {this.props.name} </h2>
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
    return (
      <div>
      <h1> {contest.name} </h1>
        <div className={styles.pageContainer}>
          <div className={styles.contestContainer}>
            {this.getItemsInContest(contest.items)}
          </div>
          <div className={styles.map}>
            <MapContainer lng={contest.lng} lat={contest.lat}/>
          </div>
        </div>
      </div>
    );
  }
};
