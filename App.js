const fn = require("./note");

const help = () => {
  console.log("help  show help");
  console.log("list  to show the list of Notes");
  console.log("add --title your_title --body note_body to add a  note");
  console.log("read --title your_title  to read a  note ");
  console.log("remove --title your_title to remove a  note");
};

switch (process.argv[2]) {
  case "add":
    fn.addNote(process.argv[4], process.argv[6]);
    break;
  case "read":
    fn.readNote(process.argv[3]);
    break;
  case "remove":
    fn.remove(process.argv[3]);
    break;
  case "list":
    fn.list();
    break;
  default:
    help();
    break;
}
