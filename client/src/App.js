import './App.css';
import{ BrowserRouter as Router, Routes, Route, }  from "react-router-dom"; 
import { Home } from "./pages/home";
import { Register } from "./pages/register";
import { Signin} from "./pages/signin";
import { CreatePost } from "./pages/createPost";
import { UpdatePost } from "./pages/updatePost";
import { DeletePost } from "./pages/deletePost";
import { ReadPosts } from "./pages/readPosts";
import { Navbar } from "./components/navbar";


function App() {
  return ( 
  <div className="App">
    <Router> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/createPost" element={<CreatePost/>} />
        <Route path="/updatePost" element={<UpdatePost />} />
        <Route path="/deletePost" element={<DeletePost />} />
        <Route path="/readPosts" element={<ReadPosts />} />
     </Routes>
    </Router>
  </div>
  );
}


export default App;
