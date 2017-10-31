import React, { Component } from 'react'
import styles from "./style.css";
import paperKit from "../../public/pk2-pro-html-v2/assets/css/paper-kit.css";
import { Link } from 'react-router';
//import { ContestCard } from '../../shared/components/ContestCard';
import { ButtonToolbar, Button } from 'react-bootstrap';

export default class ContestCard extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Link to={ `/contest/${this.props.id}` } className={paperKit.card} data-background="color" data-color="orange" data-radius="none">
        <div className={paperKit.cardBlock}>
          <h3 className={paperKit.cardCategory}> {this.props.name} </h3>
        </div>
      </Link>
    );
  }
}
