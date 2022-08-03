const express = require('express');
const apiMocker = require('connect-api-mocker');
const cors = require('cors');
const app = express();
const port = 9000;

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use('/api', apiMocker('mock-api'));
app.listen(port)