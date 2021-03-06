import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from '../../components';

import {
  HomePage,
  LoginPage,
  NewTodoPage,
  NotFoundPage,
  ReactQueryPage,
  RegisterPage,
  SingleTodoPage,
  TodoPage,
  TodosPage,
} from '../../pages';
import Layout from '../Layout';

const AppLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="reactquery" element={<ReactQueryPage />} />
        <Route
          path="todos"
          element={
            <PrivateRoute>
              <TodoPage />
            </PrivateRoute>
          }
        >
          <Route path=":todoId" element={<SingleTodoPage />} />
          <Route path="new" element={<NewTodoPage />} />
          <Route index element={<TodosPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppLayout;
