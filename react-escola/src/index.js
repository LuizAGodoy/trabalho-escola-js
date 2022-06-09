import React from 'react';

import './index.css';

import Router from './router/Router';

import {StrictMode} from 'react';

// ✅ now importing from react-dom/client
import {createRoot} from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
