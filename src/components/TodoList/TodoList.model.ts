export interface Todo {
  readonly id: string;
  readonly text: string;
}

export interface TodoListProps {
  readonly todos: readonly Todo[];
}
