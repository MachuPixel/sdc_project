import React from 'react';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';
import "../../public/styles.css"

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />);