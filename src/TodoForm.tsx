import { NewTodoForm } from './NewTodoForm'
import { TodoList } from './TodoList';
import { useState } from 'react';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export function TodoForm() {
    const [todos, setTodos] = useState<Todo[]>(() => {
    const localValue = localStorage.getItem('TODOS');
    return localValue ? JSON.parse(localValue) : [];
  });

  const handleSubmit = (value: string) => {
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        title: value,
        completed: false,
      },
    ]);
  };
  
  const handleCheck = (id: string, completed: boolean) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  return (
    <>
      <NewTodoForm onSubmit={handleSubmit}/>
      <TodoList
        todos={todos}
        onCheckTodo={handleCheck}
      />
    </>
  )
}