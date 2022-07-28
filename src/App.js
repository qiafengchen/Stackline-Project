import React from 'react';
import Layout from './hoc/Layout/Layout';
import Analytics from './containers/Analytics/Analytics';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Analytics />
      </Layout>
    </div>
  );
};

export default App;
