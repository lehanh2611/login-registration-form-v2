function CreateID() {
  const date = new Date();

  return `${date.getFullYear()}${date.getMonth()}${date.getDay()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getMilliseconds()}${Math.floor(
    Math.random() * 10
  )}`;
}

export default CreateID;
