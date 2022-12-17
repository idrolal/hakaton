require('dotenv').config();
const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 6000;
const cookieParser = require('cookie-parser')
const indexRoute = require('./router');
const errorMiddleware = require('./middlewares/error-middleware')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())

app.use(cors({
  origin: '*',
  credentials: true,
}));

app.use('/api', indexRoute);
app.use(errorMiddleware)

app.listen(PORT, () => {
  console.log('Server started on port', PORT);
});