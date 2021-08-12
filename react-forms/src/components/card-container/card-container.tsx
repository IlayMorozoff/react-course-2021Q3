/* eslint-disable @typescript-eslint/no-useless-constructor */
import { PureComponent } from 'react';
import Card from '../card/card';
import { ICard } from '../interfaces';
import './card-container.scss';

interface IPropsCardContainer {
  onCardAdded: (card: ICard) => void;
  cards: ICard[];
}

export default class CardContainer extends PureComponent<IPropsCardContainer> {
  constructor(props: IPropsCardContainer) {
    super(props);
  }

  render() {
    const { cards } = this.props;
    const elementsCards = cards.map((card) => {
      return <Card {...card} key={Math.random() + 1} />;
    });
    return <div className="card__container">{elementsCards}</div>;
  }
}
