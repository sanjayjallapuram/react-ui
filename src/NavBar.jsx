import "./NavBar.css"
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function NavBar(){
   return(
     <div className="NavBar">
         <select className="dropdwn-inp">
            <option>Patients</option>
            <option>Doctors</option>
            <option>Nurses</option>
         </select>
         <input className="search-inp" type="text" placeholder="Search"></input>
         <SearchIcon className="search-icon"></SearchIcon>
         <button className="btn">+ Add New</button>
         <Avatar className="image" src="1.jpg"  alt="Remy Sharp"/>
         <Badge color="secondary" variant="dot" className="bell-icon-notification">
            <NotificationsIcon className="bell-icon"/>
        </Badge>
     </div>
   )
}