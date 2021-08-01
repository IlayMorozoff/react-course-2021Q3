import { PureComponent } from 'react';
import { ICard } from '../interfaces';
import './card.scss';

export default class Card extends PureComponent<ICard> {
  render() {
    const { nicknameValue, dateBirth, gender, country, whatLiked } = this.props;
    const whatLikedPerson = whatLiked.map((whatLikedItem) => {
      return (
        <div className="what__person person" key={Math.random() + 3}>
          {whatLikedItem}
        </div>
      );
    });
    return (
      <div className="card">
        <div className="name_surname">
          <div className="title__name title">Nickname: </div>
          <div className="name__person person">{nicknameValue}</div>
        </div>
        <div className="date_of_birth">
          <div className="title__date title">Date of birth:</div>
          <div className="date__person person">{dateBirth}</div>
        </div>
        <div className="gender__wrapper">
          <div className="title__gender title">Gender: </div>
          <div className="gender__person person">{gender}</div>
        </div>
        <div className="country__wrapper">
          <div className="title__country title">Country: </div>
          <div className="country__person person">{country}</div>
        </div>
        <div className="what__wrapper">
          <div className="title__what title">What liked: </div>
          {whatLikedPerson}
        </div>
      </div>
    );
  }
}
