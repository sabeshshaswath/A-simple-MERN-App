import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Home,Auth,Create,Saved} from './pages'
import {Navbar} from './components'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/auth' element={<Auth/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/saved' element={<Saved/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
