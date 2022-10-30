const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema(
    { content: String, dateCreated: Date, lastModified: Date}
);

module.exports = mongoose.model('Note', NoteSchema);