import './App.css';
import Home from './Components/Home';
import AddStudent from './Components/Addstudent';
import Editstudent from './Components/Editstudent';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>  
    <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/AddStudent' element = {<AddStudent/>}/>
      <Route path = '/Editstudent' element = {<Home/>}/>
      <Route path = '/Editstudent' element = {<Home/>}/>
    </Routes>
     </BrowserRouter>
 
  );
}

export default App;
