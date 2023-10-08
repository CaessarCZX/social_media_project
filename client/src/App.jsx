import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { Post } from './pages/Post.jsx'
import { Register } from './pages/Resgister.jsx'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
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
