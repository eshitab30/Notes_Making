import React, { useState } from 'react';

const NoteEditor = ({ addNote }) => {
  const [text, setText] = useState('');
const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addNote(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-24 p-3 border border-gray-300 rounded-xl resize-none"
        placeholder="Write a note..."
      ></textarea>
      <button
        type="submit"
        className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700"
      >
        Add Note
      </button>
    </form>
  );
};

export default NoteEditor;