import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import { serverPort, apiPrefix } from "./config";
import "./algorithms/tsp-dp";

const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit:50000}));
app.use(cors()); // корс для хедов

const server = app.listen(serverPort, () => { // слушатель на serverPort
    console.log("Server run on the " + apiPrefix)
});