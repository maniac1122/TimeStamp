'use strict';

const test = require('tape');
const timestamp = require('../timestamp.js');

test('it should return with an object', (t) => {
  t.is(typeof timestamp(), 'object');
  t.end();
});

test('it should return an object which has a "unix" and a "natural" key', (t) => {
  const actual = Object.keys(timestamp());
  const expected = ['unix', 'natural'];
  t.same(actual, expected);
  t.end();
});

test('it should return both formats if I pass a unix timestamp', (t) => {
  const actual = timestamp(1480281405);
  const expected = {
    unix: 1480281405,
    natural: 'November 27, 2016',
  };
  t.same(actual, expected);
  t.end();
});

test('it should return both formats if I pass a human readable date', (t) => {
  const actual = timestamp('June 19, 2016');
  const expected = {
    unix: 1466290800,
    natural: 'June 19, 2016',
  };
  t.same(actual, expected);
  t.end();
});

test('it should return both formats if I pass a human readable date', (t) => {
  const actual = timestamp('2016 6 19');
  const expected = {
    unix: 1466290800,
    natural: 'June 19, 2016',
  };
  t.same(actual, expected);
  t.end();
});


test('it should return null for both formats if I pass a non-date argument', (t) => {
  const actual = timestamp('gibberish');
  const expected = {
    unix: null,
    natural: null,
  };
  t.same(actual, expected);
  t.end();
});
