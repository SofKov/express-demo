const fs = require("fs");

const saveTask = (task) => {
    // const notesJson = JSON.stringify(allNotes);
    fs.writeFileSync("src/tasks.txt", task);
};

module.exports = {
    saveTask,
};