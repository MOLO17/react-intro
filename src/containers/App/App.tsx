import React, { FunctionComponent, useState, useCallback, useEffect } from 'react';

import './App.css';

import { AppState, AppProps } from './App.model';

import Layout from '../../components/Layout/Layout';
import TodoList from '../../components/TodoList/TodoList';
import TodoForm from '../../components/TodoForm/TodoForm';

const App: FunctionComponent<AppProps> = ({
  data = [],
  persistData = () => undefined,
}) => {
  const [todos, setTodos] = useState<AppState>(data);

  const handleSubmit = useCallback(
    (text: string) => {
      const id = `${Date.now()}`;

      setTodos(prevTodos => [...prevTodos, { id, text }]);
    },
    [setTodos],
  );

  useEffect(
    () => {
      persistData(todos);
    },
    [todos, persistData],
  );

  return (
    <Layout>
      <TodoList todos={todos} />
      <TodoForm onSubmit={handleSubmit} />
    </Layout>
  );
}

export default App;
