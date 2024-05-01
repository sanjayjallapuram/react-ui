import SideBar from "./SideBar";
import NavBar from "./NavBar";
import "./App.css"
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import Hr from "./Hr";
import Patients from "./Patients";
import Labs from "./Labs";
import Pharma from "./Pharma";
import Registration from "./Registration";
import Consultation from "./Consultation";
import Billing from "./Billing";
import TestsReports from "./TestsReports";

function App() {  
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><SideBar/><Hr/></>
    },
    {
      path:"/Patients",
      element:<><SideBar/><Patients/></>
    },
    {
      path:"/Hr",
      element:<><SideBar/><Hr/></>
    },
    {
      path:"/Labs",
      element:<><SideBar/><Labs/></>
    },
    {
      path:"/Pharma",
      element:<><SideBar/><Pharma/></>
    },
    {
      path:"/Registration",
      element:<><SideBar/><Registration/></>
    },
    {
      path:"/Consultation",
      element:<><SideBar/><Consultation/></>
    },
    {
      path:"/Billing",
      element:<><SideBar/><Billing/></>
    },
    {
      path:"/TestsReports",
      element:<><SideBar/><TestsReports/></>
    },
  ])

  return (
    <>
      <NavBar></NavBar>
      <RouterProvider router={router}/>
  
    </>
  )
}

export default App;
