import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page404 from './pages/Page404';
import Home from './pages/Home';

function App() {
  return (
    <div className='bg-[#1C252C] h-screen'>
      <Router>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path='/login' Component={Login}/>
          <Route path="/*" Component={Page404}/>
        </Routes>
    </Router>
    </div>
  )
}

export default App;
