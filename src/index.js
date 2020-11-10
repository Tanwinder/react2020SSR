import 'babel-polyfill';
import express from "express";
import renderer from './helpers/renderers'
import createStore from './helpers/createStore'
import {matchRoutes} from 'react-router-config'
import proxy from 'express-http-proxy';
import Routes from './client/Routes'

const app = express();
let counter = 1000;

app.use(express.static("public"));
app.use('/api', proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(proxyReqOpts) {
        // console.log(`proxyReqOpts${counter++}------`, proxyReqOpts)
        proxyReqOpts.headers['x-forwarded-host'] = 'localhost:3000';
        return proxyReqOpts;
    }
}))

app.get('*', (req, res) => {
    const store = createStore(req);

    const promises = matchRoutes(Routes, req.path).map(({route}) => {
        return route.loadData ? route.loadData(store) : null;
    }).map(promise => {
        if(promise) {
            return new Promise((resolve, reject) => {
                // console.log(`promise${counter++}-----`, promise, 'resolve--', resolve);
                promise.then(resolve).catch(resolve);
            })
        }
    })

    Promise.all(promises).then((val) => {
        const context = {};
        const content = renderer(req, store, context);
        console.log('content-----', context);
        if(context.url) {
            res.redirect(301, "/login");
        }
        if(context.notFound) {
            res.status(404);
        }
        res.send(content);
    })
    // .catch(err => {
    //     console.log("error-----", err)
    // });
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log("running server on port ", PORT)
});