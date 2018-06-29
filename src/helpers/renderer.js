import React from 'react';
import {renderToString} from 'react-dom/server';
import {Helmet} from 'react-helmet';

import serialize from 'serialize-javascript';

import {renderRoutes} from 'react-router-config';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import Routes from '../client/Routes';




export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter context={context} location={req.path} >
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();
  console.log(helmet.title.toString())
  return `
  <html>
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      <!-- Compiled and minified CSS -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css">
    </head>
    <body>
      <div id="root">${content}</div>
      <script src='bundle.js' async defer></script>
      <script>
        window.INITIAL_STATE = ${serialize(store.getState())}
      </script>
  
      <!-- Compiled and minified JavaScript -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>  
    </body>
  </html>
  `
}