require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./routes/router');

// manually generated
const userRouter = require('./routes/routerBiodata')
const exitRouter = require('./routes/routerExit')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

// index.js as an entry point, will re-route either
// every router must have its own directory, not /
app.use('/', router);
app.use('/', userRouter);
app.use('/', exitRouter);

app.listen(process.env.SERVER_PORT, () => {console.log('Server Running ' + process.env.SERVER_PORT)});
