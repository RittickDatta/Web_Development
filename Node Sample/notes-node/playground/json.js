// var obj = {
//   name: 'Rittick'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
// var personString = '{"name":"Rittick", "age":27}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

originalNoteString = JSON.stringify(originalNote);//'{"title":"Some Title", "body":"Some Body"}';
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);
