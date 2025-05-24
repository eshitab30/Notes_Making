import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import '../App.css';

const NoteList = ({ notes, editNote, deleteNote }) => {
  const [editingId, setEditingId] = useState(null);
  const [newText, setNewText] = useState('');

  const startEdit = (note) => {
    setEditingId(note.id);
    setNewText(note.text || '');
  };

  const saveEdit = (id) => {
    editNote(id, newText);
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  return (
    <div className="note-list">
      {notes.map((note) => (
        <div key={note.id} className={`note ${note.bgClass || 'bg-plain'}`}>
          {editingId === note.id ? (
            <>
              <textarea
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className="note-editor-textarea"
              />
              <div className="note-actions">
                <button className="edit-btn" onClick={() => saveEdit(note.id)}>Save</button>
                <button className="delete-btn" onClick={cancelEdit}>Cancel</button>
              </div>
            </>
          ) : (
            <>
              <div className="note-text">
                <ReactMarkdown>{typeof note.text === 'string' ? note.text : ''}</ReactMarkdown>
              </div>
              <div className="note-actions">
                <button className="edit-btn" onClick={() => startEdit(note)}>Edit</button>
                <button className="delete-btn" onClick={() => deleteNote(note.id)}>Delete</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default NoteList;
