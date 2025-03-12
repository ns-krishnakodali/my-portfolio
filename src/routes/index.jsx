import { Route, Routes } from 'react-router-dom';

import { About, Experience, Home, NotFound } from '../components';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
