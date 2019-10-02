import React, { FunctionComponent } from 'react';

import { List, ListItem } from '@material-ui/core';

import { TodoListProps } from './TodoList.model';

const TodoList: FunctionComponent<TodoListProps> = ({ todos }) => (
  <List>
    {
      todos.map(({ id, text }) => <ListItem key={id}>{text}</ListItem>)
    }
  </List>
);

export default TodoList;
