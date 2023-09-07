export const checkValidData = (email, password, name) => {
  const isEmailValid =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  const isPasswordValid = /^[a-zA-Z0-9_]+$/.test(password);
  const isNameValid = /^[a-zA-Z ]*$/.test(name);
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";
  if (!isNameValid) return "Name is not valid";

  return null;
};
