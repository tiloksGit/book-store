const apiResponse = async (url, options) => {
  try {
    const response = await fetch(url, options);
    return response;
  } catch (err) {
    alert(err.message);
  }
};

export default apiResponse;
