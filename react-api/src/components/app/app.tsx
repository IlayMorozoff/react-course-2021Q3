import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import About from '../about/about';
import DetailsNews from '../details-news/details-news';
import Error404 from '../Error404/Error404';
import Header from '../header/header';
import HomePage from '../home-page/home-page';
import './app.css';

export const App: FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" exact component={About} />
        <Route path="/details/:title" exact component={DetailsNews} />
        {/* <Route
          path="/details/:id/:title/:author/:description/:url/:urlToImage/:content"
          exact
          component={DetailsNews}
        /> */}
        <Route component={Error404} />
      </Switch>
    </>
  );
};

export default App;
