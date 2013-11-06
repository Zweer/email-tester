/*jshint node: true */

'use strict';

var fs = require('fs');

function loadFile (file) {
  if (typeof file === 'undefined') {
    return false;
  }

  if (fs.existsSync(file)) {
    return fs.readFileSync(file);
  } else {
    console.error('File "' + file + '" not found');
  }

  return false;
}

module.exports.createMessage = function createMessage (message, htmlFile, textFile) {
  message = message || {};

  var html = loadFile(htmlFile);
  var text = loadFile(textFile);

  if (html) {
    message.html = html;
  }

  if (text) {
    message.text = text;
  }

  return message;
};