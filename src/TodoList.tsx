import { TodoItem } from './TodoItem';

type Todo = {
    id: string;
    title: string;
    completed: boolean;
    };

type TodoListProps = {
  todos: Todo[];
  onCheckTodo: (id: string,checked: boolean) => void;
};

export const TodoList: React.FC<TodoListProps> = ({ todos, onCheckTodo }) => {
  return (
    <>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.map((todo) => {
          return <TodoItem {...todo}  onCheckTodo={onCheckTodo} />;
        })}
      </ul>
    </>
  );
}