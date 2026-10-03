function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', border: '1px solid #ccc', marginBottom: '8px', textDecoration: task.completed ? 'line-through' : 'none' }}>
      <span onClick={() => onToggle(task.id)} style={{ cursor: 'pointer' }}>
        {task.text}
      </span>
      <div>
        <button onClick={() => onToggle(task.id)} style={{ marginRight: '5px' }}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </li>
  )
}
export default TaskItem;