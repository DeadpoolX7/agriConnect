

import { Routes, Route } from "react-router-dom"
import CompanyDashboard from "./components/company/CompanyDashboard"
import Home from "./pages/Home"
import ContractForm from "./components/contract/ContractForm"
import CompanyRegister from "./components/company/CompanyRegister"
import FarmerDashboard from "./components/farmer/FarmerDashboard"
import Login from "./components/auth/Login"
import CompanyProtectedRoute from "./services/CompanyProtectedRoute"
import CompanyLogin from "./components/company/CompanyLogin"
import FarmerRegister from "./components/farmer/FarmerRegister"
import ApplicationForm from "./components/farmer/ApplicationForm"
import FarmerLogin from "./components/farmer/FarmerLogin"
import FarmerProtectedRoute from "./services/FarmerProtectedRoute"
import AdminLogin from "./components/admin/AdminLogin"
import AdminDashboard from "./components/admin/AdminDashboard"
import AdminPrivateRoute from "./services/AdminProtectedRoute"
import ZonalRegister from "./components/zonal/ZonalRegister"
import ZonalLogin from "./components/zonal/ZonalLogin"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" Component={Home} />

      <Route path="/company/register" Component={CompanyRegister} />
      <Route path="/company/login" Component={CompanyLogin}/>
      <Route path="/:companyName/dashboard" element=
      {
        <CompanyProtectedRoute>
        <CompanyDashboard />
        </CompanyProtectedRoute>
        }/>
      <Route path="/:companyName/postContract" Component={ContractForm}/>

      <Route path="/farmer/register" Component={FarmerRegister}/>
      <Route path="/farmer/login" Component={FarmerLogin}/>
      <Route path="/:farmerName/feed" element={
        <FarmerProtectedRoute>
          <FarmerDashboard />
        </FarmerProtectedRoute>
      }/>
      <Route path="/:farmerName/applicationForm" Component={ApplicationForm} />

      <Route path="/admin" Component={AdminLogin}/>

      <Route path="/admin/dashboard" element={
        <AdminPrivateRoute>
          <AdminDashboard />
        </AdminPrivateRoute>
      }/>
      <Route path="/zonal/register" Component={ZonalRegister}/>
      <Route path="/zonal/login" Component={ZonalLogin}/>
    </Routes>
      
    </>
  )
}

export default App



/*TODO 27/8/24 

*/