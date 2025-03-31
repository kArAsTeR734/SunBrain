import Home from "./pages/Home.tsx";
import {Routes,Route} from "react-router-dom";
import Login from "./pages/Login.tsx";
import Registration from "./pages/Registration.tsx";
import './App.css';
import TeacherDashboard from "./pages/TeacherDashboard.tsx";
import StudentAccountPage from "./pages/StudentPersonalAccount.tsx";
import StudentObjectCatalog from "./pages/StudentObjectCatalog.tsx";
import StudentPersonalCalendar from "./pages/StudentPersonalCalendar.tsx";

function App() {

  return (
    <>
        <Routes>
            <Route path = "/" element={<Home/>}/>
            <Route path = "/login" element={<Login/>}/>
            <Route path = "/registration" element={<Registration/>}/>
            <Route path = "/teacher/dashboard" element={<TeacherDashboard/>}/>
            <Route path = "/student/catalog" element={<StudentObjectCatalog/>}/>
            <Route path = "/student/calendar" element={<StudentPersonalCalendar/>}/>
            <Route path = "/student/catalog/*" element={<StudentObjectCatalog/>}/>
            <Route path = "/student/account" element={<StudentAccountPage/>}/>
        </Routes>
    </>
  )
}

export default App
