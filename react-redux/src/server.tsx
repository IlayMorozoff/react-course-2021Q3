import express from 'express';

import React from 'react';
import {renderToString} from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderTemplate } from './renderTemplate';
import store from './store';
import App from './components/app/app';

const app = express();

app.use(express.static('dist'));

app.get('*', async (req, res) => {

  let context = {};

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App/>
      </StaticRouter>
    </Provider>
  );

  res.send(
    renderTemplate({
      cssPath: 'main.css',
      jsPath: 'main.js',
      content,
    })
  );
  })

app.listen(3000, () => {
  console.log(`Server is listening on port: 3000`);
});
