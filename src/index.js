import express from "express";
import Renderer from './helpers/renderers'

const app = express();

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send(Renderer());
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log("running server on port ", PORT)
});