const http = require('http');
const express = require('express');
const rp = require("request-promise");
const sleep = require('sleep-promise');

const LISTEN_HOSTNAME = process.env.MYWEB_LISTEN_HOSTNAME || '0.0.0.0';
const LISTEN_PORT = process.env.MYWEB_LISTEN_PORT || '3000';

const app = express();

app.get('/customer/:id', function (req, res) {
  sleep(300).then(function() {
    const customer = {
      id: req.params.id,
      first: "Bob",
      last: "Doe",
    }
    res.json(customer);
  });
});

app.listen(LISTEN_PORT, LISTEN_HOSTNAME, function () {
  console.log(`Listening on ${LISTEN_HOSTNAME}:${LISTEN_PORT}`);
});
