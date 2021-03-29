const fs = require("fs");
const chalk = require("chalk");
const addNote = (title, body) => {
  const data = getNotes();
  if (data.notes === undefined) {
    data.notes = [];
  }
  let isAdd = true;
  if(data.notes.length > 0) {
      data.notes.map((obj,index) => {
        if(obj.title === title)
            isAdd = false;
      })
  }
  if(isAdd){
    data.notes.push({
        title: title,
        body: body,
      });
      saveNotes(data);
  }
  else
    console.log(chalk.bold.bgRed("Note with title: "+title + " already present"));
  
};

const removeNote = (title) => {
  const data = getNotes();
  let isRemove = false;
  if (data.notes !== undefined) {
    data.notes.map((obj, index) => {
      if (obj.title == title) {
        isRemove = true;
        data.notes.splice(index, 1);
      }
    });
  }
  else
    console.log(chalk.bold.bgRed("There are no notes to delete"));

  if(isRemove)
    saveNotes(data);
  else
  console.log(chalk.bold.bgRed("Note with title: " + title + " not present"));
};

const updateNote = (title, body) => {
  console.log(title, body);
};

const listAllNotes = () => {
  console.log(getNotes());
};

const getNotes = () => {
  debugger
  try {
    const dataBuffer = fs.readFileSync("./notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return {};
  }
};

const saveNotes = (data) => {
  const dataJSON = JSON.stringify(data);
  fs.writeFileSync("./notes.json", dataJSON);
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  updateNote: updateNote,
  listAllNotes: listAllNotes,
};
