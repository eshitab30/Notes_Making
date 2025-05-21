import React, { useState, useEffect } from 'react';
import NoteEditor from './components/NoteEditor';
import NoteList from './components/NoteList';
import { loadNotes, saveNotes } from './utils/storage.js';

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const initialNotes = loadNotes();
    setNotes(initialNotes);
  }, []);

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const addNote = (text) => {
    setNotes([...notes, { id: Date.now(), text }]);
  };

  const editNote = (id, newText) => {
    setNotes(notes.map(note => (note.id === id ? { ...note, text: newText } : note)));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 to-indigo-300 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center mb-6">📝 React Notes App</h1>
        <NoteEditor addNote={addNote} />
        <NoteList notes={notes} editNote={editNote} deleteNote={deleteNote} />
      </div>
    </div>
  );
};

export default App;
