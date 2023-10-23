import { postDataApi } from '../../utils/fetchDataApi.js'
import { ALERT_TYPES } from './alertActions.js'

export const TYPES = {
  AUTH: 'AUTH'
}

export const login = (credentialAccess) => async (dispatch) => {
  try {
    dispatch({
      type: ALERT_TYPES.ALERT,
      payload: {
        loading: true
      }
    })

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
