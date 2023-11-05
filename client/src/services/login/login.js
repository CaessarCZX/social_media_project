export const verifyPassword = ({ password, confirmPassword }) => {
  if (password === confirmPassword) return true
  return false
}
