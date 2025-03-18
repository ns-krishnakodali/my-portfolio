import { Route, Routes } from 'react-router-dom';

import { About, ContactMe, Education, Experience, Home, NotFound, Projects } from '../components';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/education" element={<Education />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact-me" element={<ContactMe />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
