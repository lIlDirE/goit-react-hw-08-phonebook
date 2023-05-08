import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = token => {
	axios.defaults.headers.common['Authorization'] = token;
  };
  
  export const dellToken = () => {
	delete axios.defaults.headers.common['Authorization'];
  };

  export const getContacts = async token => {
    setToken(token);
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return Promise.reject(error.response.statusText);
    }
  };

export const deleteContact = async contactId => {
  try {
    const response = await axios.delete(`/contacts/${contactId}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const addContact = async contact => {
  try {
    const response = await axios.post('/contacts', contact);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const signup = async contact => {
  try {
    const { data } = await axios.post('/users/signup', contact);
    setToken(`Bearer ${data.token}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const login = async contact => {
  try {
    const { data } = await axios.post('/users/login', contact);
    setToken(`Bearer ${data.token}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const logout = async () => {
  try {
    await axios.post('/users/logout');
    dellToken();

  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const currentUser = async token => {
  try {
    setToken(`Bearer ${token}`);
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    dellToken();
    return Promise.reject(error.message);
  }
};