import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import {Routes, Route} from 'react-router'
import UserProvider from "./components/UserProvider";
import Form from "./components/Form/Form";
import Signup from "./pages/Signup/Signup";
import Dashboard from "./pages/Dashboard/Dashboard";
import Settings from "./components/Settings";
import Task from "./components/Task";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <UserProvider>
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/form" element={<Form />}/>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Settings />} />
        <Route path='task' element={<Task />} />
      </Route>

      
    </Routes>
    </UserProvider>
  );
}

export default App;
