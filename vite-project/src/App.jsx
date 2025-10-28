import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ApiPage from './pages/Apipage';
import Layout from './components/Layout';
import './index.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<ApiPage />} />
      </Routes>
    </Layout>
  );
}

export default App;