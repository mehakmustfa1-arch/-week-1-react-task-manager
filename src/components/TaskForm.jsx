import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      alert('Task empty nahi ho sakta!');
      return;
    }
    onAddTask(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Naya task likho..."
        style={{ flex: 1, padding: '10px' }}
      />
      <button type="submit">Add Task</button>
    </form>
  )
}
export default TaskForm;