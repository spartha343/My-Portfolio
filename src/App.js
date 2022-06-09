import './App.css';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom'
import Blog from './Components/Blog/Blog';
import Projects from './Components/Projects/Projects';
import Home from './Components/Home/Home';
import About from './Components/About/About';

function App() {
    return (
        <div className="App">
            <Header></Header>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='Home' element={<Home></Home>}></Route>
                <Route path='Projects' element={<Projects></Projects>}></Route>
                <Route path='About' element={<About></About>}></Route>
                <Route path='Blog' element={<Blog></Blog>}></Route>
            </Routes>
        </div>
    );
}

export default App;
