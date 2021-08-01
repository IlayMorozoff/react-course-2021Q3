import { PureComponent } from 'react';
import Card from '../card/card';
import './card-container.scss';

export default class CardContainer extends PureComponent {
  render() {
    return (
      <div className="card__container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}
