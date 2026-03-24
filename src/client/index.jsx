import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from '../shared/Header';

window.addEventListener('load', () => {
  const root = createRoot(document.getElementById('root'));
  root.render(<Header />);
});