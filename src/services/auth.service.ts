import instance from './axiosInstance';

export const loginAPI = async (payload: any) => {
  try {
    const response = await instance.get('users', {
      
    });
    return { responseData: response.data };
  } catch (error) {
    return { error };
  }
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
