import { PureComponent } from 'react';
import './card.scss';

export default class Card extends PureComponent {
  render() {
    return (
      <div className="card">
        <div className="name_surname">
          <div className="title__name title">Nickname: </div>
          <div className="name__person person">Ilya</div>
        </div>
        <div className="date_of_birth">
          <div className="title__date title">Date of birth:</div>
          <div className="date__person person">22.02.1994</div>
        </div>
        <div className="gender__wrapper">
          <div className="title__gender title">Gender: </div>
          <div className="gender__person person">Male</div>
        </div>
        <div className="country__wrapper">
          <div className="title__country title">Country: </div>
          <div className="country__person person">Russia</div>
        </div>
        <div className="what__wrapper">
          <div className="title__consent title">What liked: </div>
          <div className="consent__person person">Something other</div>
        </div>
      </div>
    );
  }
}
