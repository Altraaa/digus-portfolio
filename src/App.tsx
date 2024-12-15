import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from './Views/HomeView';
import ProjectDetailView from './Views/ProjectDetailView';
import UniversityProject from './components/Detail/UniversityProject';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomeView />} />
        <Route path="/project" element={<ProjectDetailView />} />
        <Route path="/" element={<UniversityProject />} />
      </Routes>
    </Router>
  );
}

export default App;
