import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Register } from './pages/register';
import { Signin } from './pages/signin';
import { CreatePost } from './pages/createPost';
import { Navbar } from './components/navbar';

function App() {
  return (

   <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/" element={<Home />} />
            < Route path="/createPost" element={<CreatePost />} />
          </Routes>
        </Router>
    </div>

  );
}

export default App;

