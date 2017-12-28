console.log('Starting notes.js');

var addNote = (title, body) => {
  console.log('Adding Note,', title, body);
};

var getAll = () => {
  console.log('Getting All Notes.');
};

var read = (readNote) => {
    console.log("Reading Note:", readNote);
};

var remove = (removeNote) => {
    console.log("Remving Note:", removeNote);
};

module.exports = {
  addNote,
  getAll,
  read,
  remove
};
