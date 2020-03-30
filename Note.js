const fs = require("fs");

let addNote = (title, body) => {
  let note = {
    title: title,
    body: body
  };
  let newNote = [...JSON.parse(fs.readFileSync("note.json")), note];
  console.log(newNote);
  fs.writeFileSync("note.json", JSON.stringify(newNote));
};
let remove = title => {
  let note = [...JSON.parse(fs.readFileSync("note.json"))];
  let filterNote = note.filter(note => note.title !== title);
  console.log(filterNote);
  fs.writeFileSync("note.json", JSON.stringify(filterNote));
};
let readNote = title => {
  let note = [...JSON.parse(fs.readFileSync("note.json"))];
  let read = note.filter(note => note.title === title);
  console.log(read);
};
let list = () => {
  let note = [...JSON.parse(fs.readFileSync("note.json"))];
  console.log(note);
};
module.exports = {
  addNote,
  remove,
  readNote,
  list
};
