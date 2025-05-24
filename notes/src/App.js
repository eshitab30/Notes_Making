import React, { useState, useEffect } from 'react';
import NoteEditor from './components/NoteEditor';
import NoteList from './components/NoteList';
import { loadNotes, saveNotes } from './utils/storage';
import './App.css';

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const initialNotes = loadNotes();
    setNotes(initialNotes);
  }, []);

  useEffect(() => {
    saveNotes(notes);
  }, [notes]);

  const addNote = ({ text, bgClass }) => {
    const trimmedText = typeof text === 'string' ? text.trim() : '';
    if (!trimmedText) return;

    const newNote = {
      id: Date.now(),
      text: trimmedText,
      bgClass: bgClass || 'bg-plain',
    };

    setNotes([newNote, ...notes]);
  };

  const editNote = (id, newText) => {
    setNotes(notes.map(note =>
      note.id === id ? { ...note, text: newText } : note
    ));
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div>
      <h1>NOTES</h1>
      <NoteEditor addNote={addNote} />
      <NoteList notes={notes} editNote={editNote} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
