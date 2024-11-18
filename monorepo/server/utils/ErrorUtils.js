const handleNetworkError = (error) => {
  console.error('Network Error:', error.message);
  return {
    status: 'error',
    message: 'Network Error',
    trace: error.stack
  };
};

const handleUnexpectedResponse = (error) => {
  console.error('Unexpected Response:', error.message);
  return {
    status: 'error',
    message: 'Unexpected Response',
    trace: error.stack
  };
};

const handleInvalidParameters = (error) => {
  console.error('Invalid Parameters:', error.message);
  return {
    status: 'error',
    message: 'Invalid Parameters',
    trace: error.stack
  };
};

const logError = (error) => {
  console.error('Error:', error.message);
  console.error('Trace:', error.stack);
};

export { handleNetworkError, handleUnexpectedResponse, handleInvalidParameters, logError };
