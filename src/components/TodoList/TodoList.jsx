import { TodoInfo } from '../TodoInfo/TodoInfo';

// Add the required props
export const TodoList = ({ todos = [], users = [] }) => (
  <section className="TodoList">
    {todos.map(todo => {
      const user = Array.isArray(users)
        ? users.find(u => u.id === todo.userId) // Потрібно порівнювати todo.userId
        : null;

      return <TodoInfo key={todo.id} todo={todo} user={user} />;
    })}
  </section>
);
