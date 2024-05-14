import './App.css'
import 'semantic-ui-css/semantic.min.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/home'
import Recipe from './components/recipe'


function App() {

  return (
    <Router>
       <Navbar/>
       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/recipe' element={<Recipe/>}/>
       </Routes>
    </Router>
     
  )
}

export default App
