/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from '../about/about';
import DetailsNews from '../details-news/details-news';
import Error404 from '../Error404/Error404';
import Header from '../header/header';
import HomePage from '../home-page/home-page';
import { IArticle } from '../interfaces';
import './app.css';

export const Context = React.createContext<IArticle[]>([]);

export const App: FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/about" exact component={About} />
        <Route
          path="/details/:id/:title/:author/:description/:url/:urlToImage/:content"
          exact
          component={DetailsNews}
        />
        <Route component={Error404} />
      </Switch>
    </Router>
  );
};

export default App;
