import React from 'react'
import { renderToString } from 'react-dom/server';
import {StaticRouter} from "react-router-dom";
import {Provider} from 'react-redux'; 
import Routes from "../client/Routes";
import {renderRoutes} from 'react-router-config'
import serialize from 'serialize-javascript';
import { Helmet } from 'react-helmet';

export default (req, store, context) => {
    // NOTE: we can use renderToNodeStream instead of renderToString for fast load
    // but renderToNodeStream has some restrictions please read first about that
    let content = renderToString(
        <Provider store={store}>
            <StaticRouter context={context} location={req.path}>
                {/* <Routes /> */}
                <div>
                    {renderRoutes(Routes)}
                </div>
            </StaticRouter>
        </Provider>);
    const helmet = Helmet.renderStatic();
    return `<html>
        <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
        </head>
        <body>
            <div id="root" >${content}</div>
            <script>
            window.INITIAL_STATE = ${serialize(store.getState())};
            </script>
            <script src="bundle.js" ></script>
        </body>
    </html>`
}