export default (input) => {

  const unique = (value, index, self) => {
    return self.indexOf(value) === self.lastIndexOf(value)
  }

  let uniqueArr = input.filter(unique);
  
  return uniqueArr[0];
};