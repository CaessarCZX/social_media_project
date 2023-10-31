import { postDataApi } from '../../utils/fetchDataApi.js'
import { ALERT_TYPES } from './alertActions.js'

export const TYPES = {
  AUTH: 'AUTH'
}

export const login = (credentialAccess) => async (dispatch) => {
  try {
    // Dispatcher for state data
    dispatch({
      type: ALERT_TYPES.ALERT,
      payload: {
        loading: true
      }
    })

    // Get user data from back-end
    const { data } = await postDataApi('login', credentialAccess)
    dispatch({
      type: TYPES.AUTH,
      payload: {
        token: data.accessToken,
        user: data.user
      }
    })

    // Set login var such as TRUE
    localStorage.setItem('login', true)

    dispatch({
      type: ALERT_TYPES.ALERT,
      payload: {
        success: data.msg
      }
    })
  } catch (err) {
    dispatch({
      type: ALERT_TYPES.ALERT,
      payload: {
        error: err.response.data.msg
      }
    })
  }
}

export const refreshToken = () => async (dispatch) => {
  const login = localStorage.getItem('login')
  if (login) {
    dispatch({
      type: ALERT_TYPES.ALERT,
      payload: {
        loading: true
      }
    })

    try {
      const res = await postDataApi('refresh_token')
      console.log(res)
    } catch (err) {
      dispatch({
        type: ALERT_TYPES.ALERT,
        payload: {
          error: err.response.data.msg
        }
      })
    }
  }
}
