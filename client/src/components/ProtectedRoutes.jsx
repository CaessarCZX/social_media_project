import PropTypes from 'prop-types'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export function ProtectedRoutes ({ redirecTo = '/landingPage', children }) {
  const auth = useAuth()
  if (!auth.token) {
    return <Navigate to={redirecTo} />
  }

  return (children || <Outlet />)
}

ProtectedRoutes.propTypes = {
  redirecTo: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}
