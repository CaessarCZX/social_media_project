const AUTH_CTRL_ERRORS = Object.freeze({
  existingUsername: 'this username already exists',
  existingEmail: 'this email already exists',
  passwordNotEnough: 'password must be at least 8 characters',
  userNotFound: 'user does not exists',
  passwordDoesNotMatch: 'user password dose not exists'
})

module.exports = {
  authErrors: AUTH_CTRL_ERRORS
}
