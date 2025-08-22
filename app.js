import bodyParser from 'body-parser';
import express from 'express';

import testRoutes from './routes/test.js';

const app = express();

app.use(bodyParser.json());

app.use(testRoutes);

app.listen(process.env.PORT);
