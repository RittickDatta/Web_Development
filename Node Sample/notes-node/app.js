const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const titleOptions = {
  describe: 'Title of Note',
  demand: true,
  alias: 't'
};

const bodyOptions ={
  describe: 'Note Description',
  demand: true,
  alias: 'b'
};
const argv = yargs
  .command('add', 'Add a New Note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'list all notes')
  .command('read', 'Read a Note', {
    title:titleOptions
  })
  .command('remove', 'Remove a Note',{
    removeNote: titleOptions
  })
  .help()
  .argv;
var command =argv._[0];

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
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
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
