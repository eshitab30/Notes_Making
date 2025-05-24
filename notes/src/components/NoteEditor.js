import React, { useState } from 'react';

const NoteEditor = ({ addNote }) => {
  const [text, setText] = useState('');
  const [bgClass, setBgClass] = useState('bg-plain');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof text === 'string' && text.trim()) {
      addNote({
        id: Date.now(),
        text: text.trim(),
        bgClass,
      });
      setText('');
      setBgClass('bg-plain');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="note-editor">
      <label style={{ fontWeight: '500' }}>Background</label>
      <select
        value={bgClass}
        onChange={(e) => setBgClass(e.target.value)}
        style={{ padding: '0.4rem', fontSize: '1rem', borderRadius: '8px' }}
      >
        <option value="bg-plain">Plain</option>
        <option value="bg-image-1">Dots</option>
        <option value="bg-image-2">Lines</option>
      </select>

      <textarea
        className={bgClass}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your note here..."
        style={{
          padding: '1rem',
          borderRadius: '12px',
          fontSize: '1rem',
          minHeight: '100px',
          resize: 'vertical',
        }}
      />

      <button type="submit" style={{ marginTop: '1rem' }}>
        Add Note
      </button>
    </form>
  );
};

export default NoteEditor;

