import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../components/Home';
import SuccessPage from '../components/SuccessPage';

const App = () => {

  return (
 
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
 
  )
}

export default App;
