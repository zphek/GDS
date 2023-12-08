import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page404 from './pages/Page404';
import Home from './pages/Home';
import {AuthProvider} from './contexts/AuthContext.jsx';
import AuthValidation from './middlewares/AuthValidation.jsx';

function App() {
  return (
    <div className='bg-[#1C252C] h-screen'>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path="/*" element={<Page404 />} />
            <Route path="/" element={<AuthValidation><Home /></AuthValidation>} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App;
