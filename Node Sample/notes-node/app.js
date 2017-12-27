console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

var command = process.argv[2];
console.log('Command:', command);

if(command === 'add'){
  console.log('Adding New Note');
} else if (command === 'list'){
  console.log('Lisiting All Notes');
} else if(command === 'read'){
  console.log('Reading Note');
} else if(command === 'remove'){
  console.log('Removing Note');
}
else {
  console.log('Command Not Recognized');
}
