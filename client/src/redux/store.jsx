import PropTypes from 'prop-types'

import { composeWithDevTools } from '@redux-devtools/extension'
import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import { Provider } from 'react-redux'
import rootReducer from './reducers/index.js'

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: process.env.NODE_ENV !== 'production' ? composeWithDevTools() : false
})

export const DataProvider = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

DataProvider.propTypes = {
  children: PropTypes.any.isRequired
}

// A
