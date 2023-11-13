import PropTypes from 'prop-types'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

/*
  Protected routes need to be instantiated within a React router route component

  Tested with React Router v6.

  This component allows us to redirect to the landing page or index page whenever
  there is an unauthenticated user in the application. Otherwise, internal
  components will be rendered.
*/

export function ProtectedRoutes ({ redirecTo = '/landingPage', children }) {
  const auth = useAuth()
  if (!auth.token) {
    return <Navigate to={redirecTo} />
  }

  return (children || <Outlet />)
}

ProtectedRoutes.propTypes = {
  redirecTo: PropTypes.string.isRequired,
  children: PropTypes.func
}
