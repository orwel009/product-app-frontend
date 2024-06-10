import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct';
import ViewProduct from './components/ViewProduct';
import Search from './components/Search';
import Delete from './components/Delete';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/delete' element={<Delete/>}/>
        <Route path='/' element={<ViewProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
