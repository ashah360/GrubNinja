// Convert non-array objects into an array of one item
const sanitize = data => {
  if (!Array.isArray(data)) {
    return [data];
  } else {
    return data;
  }
};

export default sanitize;
