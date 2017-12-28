console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command =argv._[0];
console.log('Command:', command);
console.log('Yargs: ', argv);

if(command === 'add'){
  console.log('Adding New Note');
  var note = notes.addNote(argv.title, argv.body);
  if(note){
    console.log('Note Created');
    notes.logNote(note);
  } else {
    console.log('Note title taken');
  }
} else if (command === 'list'){
  notes.getAll();
} else if(command === 'read'){
  var note = notes.getNote(argv.title);
  if(note){
    console.log('Note Found');
    notes.logNote(note);
  }else {
    console.log('Note Not Found');
  }
} else if(command === 'remove'){
  var noteRemoved = notes.remove(argv.removeNote);
  var message = noteRemoved ? 'Note was removed' : 'Note not found';
  console.log(message);
}
else {
  console.log('Command Not Recognized');
}
