import { Route, Routes } from 'react-router-dom';

import { About, Education, Experience, Home, NotFound } from '../components';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/education" element={<Education />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
