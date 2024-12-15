import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UniversityProject from './components/Detail/UniversityProject';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UniversityProject />} />
      </Routes>
    </Router>
  );
}

export default App;
