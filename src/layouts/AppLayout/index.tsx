import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from '../../components';

import {
  AllTodoPage,
  HomePage,
  LoginPage,
  NewTodoPage,
  NotFoundPage,
  RegisterPage,
  SingleTodoPage,
  TodoPage,
} from '../../pages';
import Layout from '../Layout';

const AppLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
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
          <Route index element={<AllTodoPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppLayout;
