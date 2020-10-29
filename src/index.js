// import 'babel-polyfill';
import express from "express";
import renderer from './helpers/renderers'
import createStore from './helpers/createStore'
import {matchRoutes} from 'react-router-config'
import Routes from './client/Routes'

const app = express();

app.use(express.static("public"));

app.get('*', (req, res) => {
    const store = createStore();

    matchRoutes(Routes, req.path).map(({route}) => {
        return route.loadData ? route.loadData() : null;
    })

    res.send(renderer(req, store));
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log("running server on port ", PORT)
});