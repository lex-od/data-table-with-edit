export const validateString = (str: string) => {
  if (!str) {
    return "Required";
  }
  if (str.length < 2) {
    return "Min. 2 characters";
  }
  return null;
};
