import instance from './axiosInstance';

export const loginAPI = async (payload: any) => {
  try {
    const response = await instance.get('users', {
      params: {
        username: payload.username,
        password: payload.password,
      },
    });
    return { responseData: response.data };
  } catch (error) {
    return { error };
  }
};

export const loginAPI2 = async (payload: any) => {
  return await instance.get('users', {
    params: {
      username: payload.username,
      password: payload.password,
    },
  });
};

export const registerAPI = async (payload: any) => {
  try {
    const response = await instance.post('users', {
      ...payload,
    });
    return { responseData: response.data };
  } catch (error) {
    return { error };
  }
};
