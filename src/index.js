import 'babel-polyfill';
import express from "express";
import renderer from './helpers/renderers'
import createStore from './helpers/createStore'
import {matchRoutes} from 'react-router-config'
import proxy from 'express-http-proxy';
import Routes from './client/Routes'

const app = express();

app.use(express.static("public"));
app.use('/api', proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(proxyReqOpts) {
        // console.log("proxyReqOpts------", proxyReqOpts)
        proxyReqOpts.headers['x-forwarded-host'] = 'localhost:3000';
        return proxyReqOpts;
    }
}))

app.get('*', (req, res) => {
    const store = createStore(req);

    const promises = matchRoutes(Routes, req.path).map(({route}) => {
        return route.loadData ? route.loadData(store) : null;
    })

    Promise.all(promises).then((val) => {
        // console.log("val----", val);
        res.send(renderer(req, store));
    });
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log("running server on port ", PORT)
});