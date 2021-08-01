/* eslint-disable @typescript-eslint/no-useless-constructor */
import { PureComponent } from 'react';
import CardContainer from '../card-container/card-container';

import Form from '../form/form';
import { ICard, IPropsApp, IStateApp } from '../interfaces';
import './app.scss';

class App extends PureComponent<IPropsApp, IStateApp> {
  constructor(props: IPropsApp) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    // this.addCard();
    // this.addCard();
    // this.addCard();
  }

  addCard = (card: ICard) => {
    const newCard: ICard = {
      nicknameValue: card.nicknameValue,
      dateBirth: '',
      gender: '',
      country: '',
      whatLiked: [],
    };
    this.setState(({ cards }) => {
      const newState = cards.slice();
      newState.push(newCard);
      return {
        cards: newState,
      };
    });
  };

  render() {
    const { countries, checkboxsData } = this.props;
    const { cards } = this.state;
    return (
      <>
        <Form countries={countries} checkboxsData={checkboxsData} onCardAdd={this.addCard} />
        <CardContainer onCardAdded={this.addCard} cards={cards} />
      </>
    );
  }
}

export default App;
