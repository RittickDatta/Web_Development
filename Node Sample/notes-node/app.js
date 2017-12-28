console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command:', command);
console.log('Yargs: ', argv);

if(command === 'add'){
  console.log('Adding New Note');
  notes.addNote(argv.title, argv.body);
} else if (command === 'list'){
  notes.getAll();
} else if(command === 'read'){
  notes.read(argv.readNote);
} else if(command === 'remove'){
  notes.remove(argv.removeNote);
}
else {
  console.log('Command Not Recognized');
}
