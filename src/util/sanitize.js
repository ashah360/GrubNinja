// Convert non-array objects into an array of itself
const sanitize = data => {
  if (!Array.isArray(data)) {
    return [data];
  }
  return data;
};

export default sanitize;
