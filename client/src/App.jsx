import React from 'react';
import Layout from './components/Layout/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="bg-white text-gray-900">
      <ToastContainer />
      {/* <MobileNav /> */}
      <Layout />
    </div>
  );
}

export default App;
