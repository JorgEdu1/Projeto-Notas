//models
const Notes = require('../models/notes');

module.exports = class notesController {

    //show all notes
    static async showNotes(req, res) {
        try {
            const notes = await Notes.findAll();
            res.status(200).json(notes);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    //show note
    static async showNote (req, res) {
        const id = req.params.id;

        try {
            const note = await Notes.findOne({
                where: {
                    id: id
                }
            });

            res.status(200).json(note);
        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }

    //create note
    static async createNote(req, res) {
        const title = req.body.title;
        const noteText = req.body.note;

        try {
            await Notes.create({
                title: title,
                note: noteText
            });

            res.status(201).json({ message: 'Nota criada com sucesso!' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    //update note
    static async updateNote(req,res) {
        const id = req.body.id;
        const title = req.body.title;
        const noteText = req.body.note;

        try {
            await Notes.update({
                title: title,
                note: noteText
            }, {
                where: {
                    id: id
                }
            });

            res.status(200).json({ message: 'Nota atualizada com sucesso!' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    //delete note
    static async deleteNote (req, res) {
        const id = req.body.id;

        try {
            await Notes.destroy({
                where: {
                    id: id
                }
            });

            res.status(200).json({ message: 'Nota deletada com sucesso!' });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}