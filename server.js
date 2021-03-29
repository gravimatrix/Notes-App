const yargs = require("yargs");
const notes = require("./notes");

yargs.command({
  command: "add",
  describe: "Adding a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title,argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Removing a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "update",
  describe: "Update an existing note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.updateNote(argv.title,argv.body);
  },
});

yargs.command({
    command: "list",
    describe: "Listing all notes",
    handler: function (argv) {
      notes.listAllNotes();
    },
  });

yargs.parse();
