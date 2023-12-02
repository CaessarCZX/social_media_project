import { validateDataToEdit } from '../../services/edit-profile/index.js'
import { getDataApi, patchDataApi } from '../../utils/fetchDataApi.js'
import { imageUpload } from '../../utils/imageUpload.js'
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

export const updateProfile = ({ editData, newAvatar, auth }) => async (dispatch) => {
  const checkData = validateDataToEdit({ editData })

  if (checkData.errorLength > 0) {
    return dispatch({
      type: ALERT_TYPES.ALERT,
      payload: {
        error: 'Uno o mas datos son incorrectos'
      }
    })
  }

  try {
    let media

    // Show a loader while data is requested
    dispatch({
      type: ALERT_TYPES.ALERT,
      payload: {
        loading: true
      }
    })

    // Verify if newAvatar is available
    if (newAvatar) {
      media = await imageUpload([newAvatar])

      if (!media) {
        return dispatch({
          type: ALERT_TYPES.ALERT,
          payload: {
            error: 'La solicitud ha fallado'
          }
        })
      }
    }

    // Update user data
    const res = await patchDataApi('user', {
      ...editData,
      avatar: newAvatar ? media[0].secure_url : auth.user.avatar
    }, auth.token)

    dispatch({
      type: 'AUTH',
      payload: {
        ...auth,
        user: {
          ...auth.user,
          ...editData,
          avatar: newAvatar ? media[0].secure_url : auth.user.avatar
        }
      }
    })

    // Show success message
    dispatch({
      type: ALERT_TYPES.ALERT,
      payload: {
        success: res.data.msg
      }
    })
  } catch (err) {
    dispatch({
      type: ALERT_TYPES.ALERT,
      payload: err.response.data.msg
    })
  }
}
