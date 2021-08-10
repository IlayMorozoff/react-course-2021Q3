import AddCartBtn from '../add-cart-btn/add-cart-btn';
import { IPropsCard } from '../interfaces';
import './card.scss';

const Card = ({ titleCard, imageURL, newPrice, oldPrice, cashBackValue }: IPropsCard) => {
  return (
    <div className="card">
      <div className="image__wrapper">
        <img src={imageURL} alt="" className="card__image" />
      </div>
      <div className="title__card">{titleCard}</div>
      <div className="prices">
        <div className="new__price">{newPrice}</div>
        <div className="old__price">{oldPrice}</div>
      </div>
      <div className="cashback">
        <img className="cashback__icon" src="../assets/m.png" alt="icon_logo" />
        <div className="cashback__value">{cashBackValue}</div>
        <div className="disctiption__cashback">Cashback</div>
      </div>
      <AddCartBtn />
    </div>
  );
};

export default Card;
