const http = require('http');
const sleep = require('sleep');
const express = require('express');
const rp = require("request-promise");

const LISTEN_HOSTNAME = process.env.MYWEB_LISTEN_HOSTNAME || '0.0.0.0';
const LISTEN_PORT = process.env.MYWEB_LISTEN_PORT || '3000';

const app = express();

app.get('/customer/:id', function (req, res) {
  const customer = {
    id: req.params.id,
    first: "Bob",
    last: "Doe",
  }
  // each customer lookup will take 10ms of CPU time to build the result, not including database lookup time.
  sleep.msleep(10);
  res.json(customer);
});

app.listen(LISTEN_PORT, LISTEN_HOSTNAME, function () {
  console.log(`Listening on ${LISTEN_HOSTNAME}:${LISTEN_PORT}`);
});
