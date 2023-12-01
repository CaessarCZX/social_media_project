import { getDataApi } from '../../utils/fetchDataApi.js'
import { ALERT_TYPES } from '../actions/alertActions'

export const PROFILE_TYPES = {
  LOADING: 'LOADING',
  GET_USER: 'GET_USER'
}

export const getProfileUsers = ({ users, id, auth }) => async (dispatch) => {
  if (users.every(user => user._id !== id)) {
    try {
      // Show a loader in case the data is requested
      dispatch({
        type: PROFILE_TYPES.LOADING,
        payload: {
          loading: true
        }
      })

      // Get user data by id
      const { data } = await getDataApi(`user/${id}`, auth.token)

      dispatch({
        type: PROFILE_TYPES.GET_USER,
        payload: data
      })

      // Disable loader
      dispatch({
        type: PROFILE_TYPES.LOADING,
        payload: {
          loading: false
        }
      })
    } catch (err) {
      dispatch({
        type: ALERT_TYPES.ALERT,
        payload: err.response.data.msg
      })
    }
  }
}

export const updateProfile = ({ editData, newAvatar }) => async (dispatch) => {

}
