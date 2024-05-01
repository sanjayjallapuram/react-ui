import "./SideBar.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StorageIcon from '@mui/icons-material/Storage';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import { NavLink } from "react-router-dom";


export default function SideBar(){

    return(
        <div className="Sidebar">
              <h4>Dashboards</h4>
            <nav>
              <NavLink to="/Patients">
                    <div className="SideBarContent cont-top">
                        <AccountCircleIcon></AccountCircleIcon>
                        <h5>Patients</h5>
                   </div>
              </NavLink>
              <NavLink to="/Hr">
                   <div className="SideBarContent hr">
                        <StorageIcon></StorageIcon>
                        <h5>HR</h5>
                   </div>
              </NavLink>
              <NavLink to="/Labs">
              <div className="SideBarContent">
                   <FilterAltIcon></FilterAltIcon>
                   <h5>Labs</h5>
              </div>
             </NavLink>
              <NavLink to="/Pharma">
                   <div className="SideBarContent cont-bottom">
                        <StoreMallDirectoryIcon></StoreMallDirectoryIcon>
                        <h5>Pharma</h5>
                   </div>
              </NavLink>
              <h4 >Processes</h4>
              <NavLink to="/Registration">
                   <div className="SideBarContent cont-top">
                        <AssignmentIcon></AssignmentIcon>
                        <h5>Registration</h5>
                   </div>
              </NavLink>
              <NavLink to="/Consultation">
                   <div className="SideBarContent">
                        <TextSnippetIcon></TextSnippetIcon>
                        <h5>Consultation</h5>
                   </div>
              </NavLink>
              <NavLink to="/TestsReports">
                   <div className="SideBarContent">
                        <VaccinesIcon></VaccinesIcon>
                        <h5>Tests & Reports</h5>
                   </div>
              </NavLink>
              <NavLink to="/Billing">
                   <div className="SideBarContent cont-bottom">
                        <CreditCardIcon></CreditCardIcon>
                        <h5>Billing</h5>
                   </div>
              </NavLink>
            </nav>
        </div>
    )
}

