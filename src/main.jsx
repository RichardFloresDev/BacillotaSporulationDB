import React from 'react';
import { createRoot } from 'react-dom/client';
import Component from './firma/logic.js';
import View from './firma/View.jsx';
import { host } from './firma/dc.jsx';
import './firma/firma.css';

const Firma = host(Component, View, 'FIRMA');

createRoot(document.getElementById('root')).render(<Firma motion={true} labels="Todas" />);
