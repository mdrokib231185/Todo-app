
import './App.css';
import Navbar from './component/Navbar';

import { Route, Routes } from "react-router-dom";
import Home from './component/Home';
import Completed from './component/Completed';
import Todo from './component/Todo';
import Calender from './component/Calendar';
import Update from './component/Update';
import Footer from './component/Footer/Footer';




function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/todo" element={<Todo></Todo>}></Route>
          <Route path="/completed" element={<Completed></Completed>}></Route>
          <Route path="/calender" element={<Calender></Calender>}></Route>
          <Route path="/update/:id" element={<Update></Update>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
