import { PureComponent } from 'react';
import CardContainer from '../card-container/card-container';

import Form from '../form/form';
import { ICard, IPropsApp, IStateApp } from '../interfaces';
import SuccessPopup from '../success-popup/success-popup';
import './app.scss';

class App extends PureComponent<IPropsApp, IStateApp> {
  constructor(props: IPropsApp) {
    super(props);
    this.state = {
      cards: [],
      isSubmit: false,
    };
  }

  addCard = (card: ICard) => {
    const newCard: ICard = {
      nicknameValue: card.nicknameValue,
      dateBirth: card.dateBirth,
      gender: card.gender,
      country: card.country,
      whatLiked: card.whatLiked,
    };
    this.setState(({ cards }) => {
      const newState = cards.slice();
      newState.push(newCard);
      return {
        cards: newState,
      };
    });
  };

  onShowSuccess = (isSubmit: boolean) => {
    this.setState({
      isSubmit,
    });
  };

  // onShowForm = (isShowed: boolean) => {

  // }

  render() {
    const { countries, checkboxsData } = this.props;
    const { cards, isSubmit } = this.state;
    const form = (
      <Form
        countries={countries}
        checkboxsData={checkboxsData}
        onCardAdd={this.addCard}
        onShowSuccess={this.onShowSuccess}
      />
    );
    const success = isSubmit ? <SuccessPopup onShowForm={this.onShowSuccess} /> : form;
    return (
      <>
        {success}
        <CardContainer onCardAdded={this.addCard} cards={cards} />
      </>
    );
  }
}

export default App;
