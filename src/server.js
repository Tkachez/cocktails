const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require("mongoose")
const routes = require("./server/routes")

mongoose
    .connect('mongodb+srv://tkachez:tkach666@testcluster.jyclm.mongodb.net/cocktails?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        const app = express()
        app.use(morgan('tiny'));
        app.use(cors());
        app.use(bodyParser.json());

        app.use("/api", routes) // new

        app.listen(5000, () => {
            console.log("Server has started!")
        })
    })
