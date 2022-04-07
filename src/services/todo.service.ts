import instance from './axiosInstance';

export const fetchTodoAPI = async (payload: any) => {
  const { userId } = payload;
  try {
    const response = await instance.get('todos', {
      params: {
        userId,
        // _page,
        // _limit: 7,
      },
    });
    return { responseData: response.data };
  } catch (error) {
    return { error };
  }
};

export const fetchSingleTodoAPI = async (payload: any) => {
  const { todoId } = payload;
  try {
    const response = await instance.get('todos', {
      params: {
        id: todoId,
      },
    });
    return { responseData: response.data };
  } catch (error) {
    return { error };
  }
};

export const addTodoAPI = async (payload: any) => {
  const { userId, name, description } = payload;
  try {
    const response = await instance.post('todos', {
      name,
      description,
      userId,
    });
    return { responseData: response.data };
  } catch (error) {
    return { error };
  }
};

export const editTodoAPI = async (payload: any) => {
  const { userId, todoId, name, description } = payload;
  try {
    const response = await instance.put(`todos/${todoId}`, {
      name,
      description,
      userId,
    });
    return { responseData: response.data };
  } catch (error) {
    return { error };
  }
};

export const deleteTodoAPI = async (payload: any) => {
  const { todoId } = payload;
  try {
    const response = await instance.delete(`todos/${todoId}`);
    return { responseData: response.data };
  } catch (error) {
    return { error };
  }
};

export const searchTodosAPI = async (payload: any) => {
  const { name } = payload;
  try {
    const response = await instance.get(`todos`, {
      params: {
        q: name,
      },
    });
    return { responseData: response.data };
  } catch (error) {
    return { error };
  }
};
