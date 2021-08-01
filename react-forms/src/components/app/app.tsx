import { PureComponent } from 'react';
import CardContainer from '../card-container/card-container';

import Form from '../form/form';
import { IPropsApp } from '../interfaces';
import './app.scss';

class App extends PureComponent<IPropsApp> {
  render() {
    const { countries, checkboxsData } = this.props;
    return (
      <>
        <Form countries={countries} checkboxsData={checkboxsData} />
        <CardContainer />
      </>
    );
  }
}

export default App;
