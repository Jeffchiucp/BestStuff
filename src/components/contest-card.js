import React, { Component } from 'react'
import styles from "./style.css";
import { Link } from 'react-router';
//import { ContestCard } from '../../shared/components/ContestCard';
import { ButtonToolbar, Button } from 'react-bootstrap';

export default class ContestCard extends Component {
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
