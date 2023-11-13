import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AlertSystem } from './components/AlertSystem'
import { ProtectedRoutes } from './components/ProtectedRoutes.jsx'
import { Home } from './pages/Home.jsx'
import { Landing } from './pages/Landing.jsx'
import { Login } from './pages/Login.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { Post } from './pages/Post.jsx'
import { Register } from './pages/Resgister.jsx'
import { refreshToken } from './redux/actions/authActions'

function App () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      refreshToken()
    )
  }, [dispatch])

  return (
    <div className='App'>
      <BrowserRouter>
        <AlertSystem />
        <Routes>

          <Route index element={<Landing />} />

          {/* useLoginRedirect affected routes */}
          <Route path='/landingPage' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          {/* Protected routes: only access with token */}
          <Route element={<ProtectedRoutes redirecTo='/' />}>
            <Route path='/home' element={<Home />} />
            <Route path='/post/:id' element={<Post />} />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
