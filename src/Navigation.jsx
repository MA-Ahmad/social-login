import { Routes, Route } from 'react-router-dom'
import Home from './Home/Index'
import TwitterLogin from './TwitterLogin'

const routes = [
  { path: '/', element: <Home /> },
  { path: '/login', element: <TwitterLogin /> },
]

const Navigation = () => {
  return (
    <Routes>
      {routes.map((route, idx) => (
        <Route key={idx} path={route.path} element={route.element} />
      ))}
    </Routes>
  )
}

export default Navigation
