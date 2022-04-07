import { Button } from '@mui/material';
import { Fragment, useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import instance from '../../services/axiosInstance';

const getTodoById = async (id: any) => {
  const { data } = await instance.get(`/todos/${id}`);
  return data;
};

const Todo = ({ todoId, setTodoId }: any) => {
  const {
    isLoading,
    isError,
    error,
    data: todo,
  }: any = useQuery(['todos', todoId], () => getTodoById(todoId));

  if (isLoading) return <span>Todo is loading...</span>;

  if (isError) return <span>{error?.message}</span>;

  return (
    <div>
      <button onClick={() => setTodoId(null)}>Back</button>
      <h3>{todo.name}</h3>
      <p>{todo.description}</p>
    </div>
  );
};

const getTodos = async (id: any) => {
  const { data } = await instance.get(`/todos`);
  return data;
};

const addNewTodo = async (newTodo: any) => {
  return await instance.post('/todos', newTodo);
};

const Todos = ({ setTodoId }: any) => {
  const {
    isLoading,
    isError,
    error,
    data: todos,
  }: any = useQuery('todos', getTodos);

  const mutation = useMutation(addNewTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  const queryClient = useQueryClient();

  if (isLoading) return <span>Todos is loading...</span>;

  if (isError) return <span>{error?.message}</span>;

  console.log(todos);

  return (
    <div>
      <h1>Todos</h1>
      <Button
        variant="contained"
        onClick={() => {
          mutation.mutate({
            id: new Date(),
            name: 'ADDED TODO',
            description: 'ADDED DES',
            userId: 1,
          });
        }}
      >
        Add todo
      </Button>
      <div>
        {todos.map((todo: any) => (
          <p key={todo.id}>
            <button
              onClick={() => setTodoId(todo.id)}
              style={
                queryClient.getQueryData(['todos', todo.id])
                  ? {
                      fontWeight: 'bold',
                      color: 'green',
                    }
                  : {}
              }
            >
              {todo.name}
            </button>
          </p>
        ))}
      </div>
    </div>
  );
};

const ReactQueryPage = () => {
  const [todoId, setTodoId] = useState(null);

  return (
    <>
      {todoId ? (
        <Todo todoId={todoId} setTodoId={setTodoId} />
      ) : (
        <Todos setTodoId={setTodoId} />
      )}
    </>
  );
};

export default ReactQueryPage;
