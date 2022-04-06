import instance from './axiosInstance';

export const fetchTodoAPI = async (payload: any) => {
  const { userId } = payload;
  try {
    const response = await instance.get('todos', {
      params: {
        userId,
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
