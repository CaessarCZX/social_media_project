import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { refreshToken } from '../redux/actions/authActions.js'

export function Home () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      refreshToken()
    )
  }, [dispatch])
  return (
    <div>
      <p>Home</p>
    </div>
  )
}
