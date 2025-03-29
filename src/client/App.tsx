import Home from "./pages/Home.tsx";
import {Routes,Route} from "react-router-dom";
import Login from "./pages/Login.tsx";
import Registration from "./pages/Registration.tsx";
import './App.css'
import TeacherDashboard from "./pages/TeacherDashboard.tsx";
import StudentAccountPage from "./pages/StudentPersonalAccount.tsx";
import StudentTaskCatalogPage from "./modules/StudentTaskCatalog";

function App() {

  return (
    <>
        <Routes>
            <Route path = "/" element={<Home/>}/>
            <Route path = "/login" element={<Login/>}/>
            <Route path = "/registration" element={<Registration/>}/>
            <Route path = "/teacher/dashboard" element={<TeacherDashboard/>}/>
            <Route path = "/student/catalog" element={<StudentTaskCatalogPage/>}/>
            <Route path = "/student/account" element={<StudentAccountPage/>}/>
        </Routes>
    </>
  )
}

export default App
