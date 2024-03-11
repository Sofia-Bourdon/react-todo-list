import { TodoItem } from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="list">
        {/* rendering to the screen when there are no todos by short circuiting */}
        {todos.length === 0 && "No items"}
        {todos.map(todo => {
          return  (
            <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} 
            deleteTodo={deleteTodo} />
        )
        })}
      </ul>
    )
}