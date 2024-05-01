import "./Hr.css"
import GroupsIcon from '@mui/icons-material/Groups';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import DownloadIcon from '@mui/icons-material/Download';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

export default function Hr(){
    return(
        <div className="body">
            <div className="Consultant-parent">
                <div className="Consultants">
                    <GroupsIcon className="GroupsIcon"/>
                    <p>Consultants</p>
                </div>
            </div>
           <div className="filters"> 
               <button className="filter-btn">Filters</button>
                <select className="select"><option>Select Range</option></select>
                <input type="radio" id="summary"></input>
                <label htmlFor="summary">Summary</label>
                <input type="radio" id="branch"></input>
                <label htmlFor="branch">Branch Wise</label>
           </div>
           <div className="cards" style={{display:"flex"}}>
              <div className="card c-1">
                 <p style={{color:"darkgreen",fontWeight:"bold" }}>Consultant Count <Diversity3Icon style={{color:"grey",left:"120px"}}className="img-1"/></p>
                 <p style={{fontSize:"large",fontWeight:"bold"}} >90/900</p> 
                 <p>Today/Period</p>
              </div>
              <div className="card c-2">
                 <p style={{color:"darkgreen",fontWeight:"bold" }}>Consultations <AssessmentIcon style={{color:"grey",left:"150px"}}className="img-1"/></p>
                 <p style={{fontSize:"large",fontWeight:"bold"}} >11/25</p> 
                 <p>Today/Period</p>
              </div>
              <div className="card c-3">
                 <p style={{color:"darkgreen",fontWeight:"bold" }}>Labs <VaccinesIcon style={{color:"grey",left:"200px"}}className="img-1"/></p>
                 <p style={{fontSize:"large",fontWeight:"bold"}} >25/250</p> 
                 <p>Today/Period</p>
              </div>
              <div className="card c-4">
                 <p style={{color:"darkgreen",fontWeight:"bold" }}>Consultant Count <LocalAtmIcon style={{color:"grey",left:"120px"}}className="img-1"/></p>
                 <p style={{fontSize:"large",fontWeight:"bold"}} >25/250  </p> 
                 <p>Today/Period</p>
              </div>
            </div>
           <div className="info" style={{paddingTop:"10px"}}>
               <div style={{display:"start"}}>Consultants</div>
               <div className="icons"><RestartAltIcon/><DownloadIcon/></div>
           </div>
           <div>
            <table border={"black"}>
                <tr>
                    <th>NAME</th>
                    <th>PATIENT COUNT</th>
                    <th>LABS</th>
                    <th>DIET PLANS</th>
                </tr>
                <tr>
                    <td>John Smith</td>
                    <td>12</td>
                    <td>3</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>Jane Doe</td>
                    <td>8</td>
                    <td>2</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>John Smith</td>
                    <td>12</td>
                    <td>3</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>Mark Johnson</td>
                    <td>6</td>
                    <td>1</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Mary Lee</td>
                    <td>10</td>
                    <td>4</td>
                    <td>8</td>
                </tr>
                <tr>
                    <td>David chen</td>
                    <td>14</td>
                    <td>5</td>
                    <td>9</td>
                </tr>
                <tr>
                    <td>John Smith</td>
                    <td>12</td>
                    <td>3</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>Jane Doe</td>
                    <td>8</td>
                    <td>2</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>John Smith</td>
                    <td>12</td>
                    <td>3</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>Mark Johnson</td>
                    <td>6</td>
                    <td>1</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>Mary Lee</td>
                    <td>10</td>
                    <td>4</td>
                    <td>8</td>
                </tr>
            </table>
           </div>
        </div>
    )
};