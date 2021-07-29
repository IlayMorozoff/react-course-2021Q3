import Card from '../card/card';
import { IPropsApp } from '../interfaces';
import './card-container.scss';

const CardContainer = ({ store }: IPropsApp) => {
  const cards = store.map((card) => {
    return (
      <Card
        titleCard={card.titleCard}
        imageURL={card.imageURL}
        newPrice={card.newPrice}
        oldPrice={card.oldPrice}
        cashBackValue={card.cashBackValue}
        key={card.id}
      />
    );
  });
  return <section className="card__container">{cards}</section>;
};

export default CardContainer;
