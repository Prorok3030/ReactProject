import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './components/screens/MainPage/Nav';
import Layout from './components/layout/Layout';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Nav />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
