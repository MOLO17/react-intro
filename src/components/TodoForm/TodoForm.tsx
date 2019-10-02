import React, { FunctionComponent, FormEvent, useState, useCallback } from 'react';

import { TextField, Button } from '@material-ui/core';

import { TodoFormProps } from './TodoForm.model';

const TodoForm: FunctionComponent<TodoFormProps> = ({
  onSubmit = () => undefined,
}) => {
  const [
    text,     // Current state
    setText,  // Dispatch function
  ] = useState('');

  const handleChange = useCallback(
    (e) => setText(e.target.value),
    [setText],
  );

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      typeof onSubmit === 'function' && onSubmit(text);

      setText('');
    },
    [text, onSubmit, setText],
  );

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Text"
        value={text}
        onChange={handleChange}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default TodoForm;
