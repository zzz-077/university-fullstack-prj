function passwordMatch(password, passwordConfirm) {
  if (password === passwordConfirm) {
    return true;
  } else {
    return false;
  }
}
export default { passwordMatch };
