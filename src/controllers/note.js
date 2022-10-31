const Note = require('../models/note.js');


// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
    var notes = []
    Note.find()
    .then(allNotes => {
        for(let i = 0; i < allNotes.length;  i++){
            const note = {
              id : allNotes[i]._id.toString(),
              text: allNotes[i].content,
              dateCreated: allNotes[i].dateCreated.toISOString().split('T')[0],
              lastModified: allNotes[i].lastModified.toISOString().split('T')[0]
            }
            notes.push(note);
            console.log(note);
        }
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};