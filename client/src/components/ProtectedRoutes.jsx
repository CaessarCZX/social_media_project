import PropTypes from 'prop-types'
import { Outlet } from 'react-router-dom'
// import { useAuth } from '../hooks/useAuth'
import { useSelector } from 'react-redux'

/*
  Protected routes need to be instantiated within a React router route component

  Tested with React Router v6.

  This component allows us to redirect to the landing page or index page whenever
  there is an unauthenticated user in the application. Otherwise, internal
  components will be rendered.
*/

export function ProtectedRoutes ({ redirecTo = '/', children }) {
  // const auth = useAuth()
  const { auth } = useSelector((state) => state.auth)

  if (!auth?.token) {
    window.location.href = redirecTo
    return
  }

  return (children || <Outlet />)
}

ProtectedRoutes.propTypes = {
  redirecTo: PropTypes.string.isRequired,
  children: PropTypes.func
}
