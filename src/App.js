import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from './pages/Dashboard';
import { LoginPage } from './pages/login-page';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage /> } />
        <Route path='/dashboard' element={<Dashboard /> } />
      </Routes>
    </div>
  );
}

export default App;
