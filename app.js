'use strict';

const express = require('express');
const path = require('path');
const cors = require('cors');
const timestamp = require('./timestamp');

const app = express();

app.set('port', process.env.PORT || 8000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  const data = {
    url: 'http://fcc-api-ts.herokuapp.com/',
    examples: [
      'June%2019,%202016',
      '06%2019,%202016',
      '06-19-2016',
      '2016 6 19',
      '1466290800',
    ],
    output: JSON.stringify(timestamp(1466290800), null, 2),
  };
  res.render('index', data);
});

app.get('/:date', cors(), (req, res) => {
  res.json(timestamp(req.params.date));
});

const server = app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log('The app is running on http://localhost:%s', server.address().port);
});
