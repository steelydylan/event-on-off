const Nightmare = require('nightmare');
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const test_url = "file:///"+path.resolve(__dirname,"index.html");

const nightmare = Nightmare({
    webPreferences  : {
    partition : 'nopersist',
    preload: path.resolve(__dirname,'./preload.js')
  },
  show: true
});

describe('should watch every events',() => {
  it('when clicked', (done) => {
    nightmare.goto(test_url)
      .click('#test .btn')
      .evaluate(() => {
        return document.querySelector('#test-result').innerText;
      })
      .then((result) => {
        assert.equal(result,'ok');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
  it('when mousedown', (done) => {
    nightmare
      .mousedown('#test2 .btn')
      .evaluate(() => {
        return document.querySelector('#test2-result').innerText;
      })
      .then((result) => {
        assert.equal(result,'mousedown');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
  it('when mouseup', (done) => {
    nightmare
      .mouseup('#test2 .btn')
      .evaluate(() => {
        return document.querySelector('#test2-result').innerText;
      })
      .then((result) => {
        assert.equal(result,'mouseup');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});