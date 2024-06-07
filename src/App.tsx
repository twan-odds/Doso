// import { useState } from 'react';
import './App.css'
// import { NewTodoForm } from './NewTodoForm'
// import { TodoList } from './TodoList';
import { Navbar } from './Navbar';
import { Home } from './Home';
import { TodoForm } from './TodoForm';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


// interface Todo {
//   id: string;
//   title: string;
//   completed: boolean;
// }

function App() {

  // const [todos, setTodos] = useState<Todo[]>(() => {
  //   const localValue = localStorage.getItem('TODOS');
  //   return localValue ? JSON.parse(localValue) : [];
  // });

  // const handleSubmit = (value: string) => {
  //   setTodos([
  //     ...todos,
  //     {
  //       id: crypto.randomUUID(),
  //       title: value,
  //       completed: false,
  //     },
  //   ]);
  // };
  
  // const handleCheck = (id: string, completed: boolean) => {
  //   setTodos((currentTodos) => {
  //     return currentTodos.map((todo) => {
  //       if (todo.id === id) {
  //         return { ...todo, completed };
  //       }
  //       return todo;
  //     });
  //   });
  // };

  const router = createBrowserRouter([{
    path: '/',
    element: <Home />,
    
   
  },{path: 'todo', element: <TodoForm/>}])

  return (
    <>
    <Navbar />
      <RouterProvider router={router}/>
    </>
  )
}

export default App
