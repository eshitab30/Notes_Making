import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const NoteList = ({ notes, editNote, deleteNote }) => {
  const [editingId, setEditingId] = useState(null);
  const [newText, setNewText] = useState('');

  const handleEdit = (note) => {
    setEditingId(note.id);
    setNewText(note.text);
  };

  const saveEdit = (id) => {
    editNote(id, newText);
    setEditingId(null);
  };

  return (
    <div className="space-y-4">
      {notes.map(note => (
        <div key={note.id} className="bg-gray-100 p-4 rounded-xl shadow-sm">
          {editingId === note.id ? (
            <>
              <textarea
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                className="w-full h-20 p-2 border rounded-md"
              ></textarea>
              <button
                onClick={() => saveEdit(note.id)}
                className="mt-2 mr-2 px-3 py-1 bg-green-500 text-white rounded-md"
              >
                Save
              </button>
              <button
                onClick={() => setEditingId(null)}
                className="px-3 py-1 bg-gray-400 text-white rounded-md"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <ReactMarkdown className="prose max-w-none">{note.text}</ReactMarkdown>
              <div className="mt-2 space-x-2">
                <button
                  onClick={() => handleEdit(note)}
                  className="px-3 py-1 bg-blue-500 text-white rounded-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-md"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default NoteList;