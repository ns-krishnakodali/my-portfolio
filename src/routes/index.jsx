import { Route, Routes } from 'react-router-dom'

import { Home } from '../components'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
