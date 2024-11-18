import axios from 'axios';

const validateUrl = (url) => {
  if (typeof url !== 'string' || !url.trim()) {
    throw new Error('Invalid URL');
  }
};

const validateData = (data) => {
  if (typeof data !== 'object' || data === null) {
    throw new Error('Invalid data');
  }
};

const handleError = (error) => {
  console.error('API Error:', error);
  throw error;
};

export const baseApi = {
  async getResponse(url) {
    try {
      validateUrl(url);
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  async postData(url, data) {
    try {
      validateUrl(url);
      validateData(data);
      const response = await axios.post(url, data);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  async putData(url, data) {
    try {
      validateUrl(url);
      validateData(data);
      const response = await axios.put(url, data);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  },

  async deleteData(url) {
    try {
      validateUrl(url);
      const response = await axios.delete(url);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  }
};
