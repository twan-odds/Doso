import React, { useEffect } from "react";
import { FC, FormEvent, useState } from "react";

interface NewTodoFormProps {
    onSubmit: (item: string) => void;
  }

export const NewTodoForm: FC<NewTodoFormProps> = ({ onSubmit }) => {
    const [item, setItem] = useState<string>('');
    const ref = React.useRef<HTMLInputElement>(null);
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      if (!item) return;
      onSubmit(item);
      setItem('');
    };

    useEffect(() => {
      ref.current?.focus();
    });
  
    return (
      <>
        <form className="new-item-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input
              ref={ref}
              type="text"
              id="item"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
          </div>
          <button className="btn">Add</button>
        </form>
      </>
    );
  };