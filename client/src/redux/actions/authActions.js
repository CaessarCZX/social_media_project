import { postDataApi } from '../../utils/fetchDataApi.js'
import { ALERT_TYPES } from './alertActions.js'

export const TYPES = {
  AUTH: 'AUTH'
}

export const login = (credentialAccess) => async (dispatch) => {
  try {
    // Dispatcher for loader
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

    // Show alert to client
    dispatch({
      type: ALERT_TYPES.ALERT,
      payload: {
        success: data.msg
      }
    })
  } catch (err) {
    // Show error message to client
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
    // Dispatcher for loader
    dispatch({
      type: ALERT_TYPES.ALERT,
      payload: {
        loading: true
      }
    })

    try {
      // Get the cookie from back-end
      const { data } = await postDataApi('refresh_token')
      dispatch({
        type: TYPES.AUTH,
        payload: {
          token: data.accessToken,
          user: data.user
        }
      })

      // Show alert to client
      dispatch({
        type: ALERT_TYPES.ALERT,
        payload: {
          success: data.msg
        }
      })
    } catch (err) {
      // Show error message to client
      dispatch({
        type: ALERT_TYPES.ALERT,
        payload: {
          error: err.response.data.msg
        }
      })
    }
  }
}

export const register = (registerData) => async (dispatch) => {
  try {
    // Dispatcher for loader
    dispatch({
      type: ALERT_TYPES.ALERT,
      payload: {
        loading: true
      }
    })

    console.log(registerData)
  } catch (err) {
    // Show error message to client
    dispatch({
      type: ALERT_TYPES.ALERT,
      payload: {
        error: err.response.data.msg
      }
    })
  }
}
