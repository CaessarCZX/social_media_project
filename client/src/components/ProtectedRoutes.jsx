import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export function ProtectedRoutes ({ redirecTo = '/landingPage', children }) {
  const auth = useSelector(state => state.auth)
  // const dispatch = useDispatch()

  if (!auth.token) {
    return <Navigate to={redirecTo} />
  }

  return (children || <Outlet />)
}

ProtectedRoutes.propTypes = {
  redirecTo: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}
