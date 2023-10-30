import { useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AlertSystem } from './components/AlertSystem'
import { Home } from './pages/Home.jsx'
import { Landing } from './pages/Landing'
import { Login } from './pages/Login'
import { NotFound } from './pages/NotFound.jsx'
import { Post } from './pages/Post.jsx'
import { Register } from './pages/Resgister.jsx'

function App () {
  const auth = useSelector(state => state.auth)
  // const dispatch = useDispatch()

  return (
    <div className='App'>
      <BrowserRouter>
        <AlertSystem />
        <Routes>
          <Route index element={auth.token ? <Home /> : <Login />} />
          {/* <Route index element={<Landing />} /> */}
          <Route path='/landingPage' element={<Landing />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/post/:id' element={<Post />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
