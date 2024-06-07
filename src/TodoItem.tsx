import { FC } from "react";

interface TodoItemProps {
    id: string;
    completed: boolean;
    onCheckTodo: (id: string,checked: boolean) => void;
    title: string;
}

export const TodoItem: FC<TodoItemProps> = ({
        id,
        completed,
        onCheckTodo,
        title,
    }) => {
    return (
      <>
        <li>
          <label>
            <input
              type="checkbox"
              checked={completed}
              onChange={(e) => onCheckTodo(id,e.target.checked)}
            />
            {title}
          </label>
        </li>
      </>
    );
  };
  