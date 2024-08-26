const express = require('express');
const app = express();
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

// middleware

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  console.log('HELLO FROM MIDDLEWARE RUSSIA');
  next();
});

app.use((req, res, next) => {
  req.time = new Date().toISOString();
  next();
});

// to make an optional parameter you write a question mark :y?

// app.get('/api/v1/tours/', getAllTours);

// app.get('/api/v1/tours/:id ', getTour);

// app.post('/api/v1/tours/', postTour);

// app.patch('/api/v1/tours/:id', patchTour);

// app.delete('/api/v1/tours/:id', deleteTour);

//mounintg

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
