import { Todo } from '../../components/TodoList/TodoList.model';

export type AppState = readonly Todo[];

export interface AppProps {
  readonly data?: AppState;
  readonly persistData?: (data: AppState) => void;
}
