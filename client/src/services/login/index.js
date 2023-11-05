export const verifyPassword = ({ password, confirmPassword }) => {
  if (password === confirmPassword) return true
  return false
}

export const manageDataForm = (inputUserData) => {
  const { firstname, lastname, username, email, password, confirmPassword } = inputUserData

  console.log(confirmPassword)
  const uniformUserName = username.toLowerCase().replace(/ /g, '')

  const userDataResponse = {
    firstname,
    lastname,
    username: uniformUserName,
    email,
    password
  }
  return userDataResponse
}
