import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employeelogin from "./components/Employeelogin";
import Adminlogin from "./components/Adminlogin";
import Hrlogin from "./components/Hrlogin";
import Dashboardadmin from "./components/Dashboardadmin";
import Dashboardhr from "./components/Dashboardhr";
import './App.css';
import './style/Employeelogin.css';
import './style/Dashboardadmin.css';
import './style/Dashboardhr.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Employeelogin/>} />
      <Route path="/adminlogin" element={<Adminlogin/>} />
      <Route path="/hrlogin" element={<Hrlogin/>} />
      <Route path="/dbadmin" element={<Dashboardadmin/>} />
      <Route path="/dbhr" element={<Dashboardhr/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
