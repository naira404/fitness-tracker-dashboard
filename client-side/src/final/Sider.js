import React from 'react'
import { Link} from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import swal from 'sweetalert';
import Dashboard from './dash/Dashboard';
import { useSelector } from 'react-redux';



function Sider() {

  // User slice
  const user = useSelector(state => state.login);
  const profileData = user.data?.data.user;
  const userId = profileData?._id;

  return (
    <div className='sider mt-0 col-2' style={{position:'fixed', height:"100vh"}}>
    <div className='logo' style={{fontWeight:"bold",textAlign:"center"}}> 
      
    <img src="/logoo.jpg" alt="My Image" className="img-fluid mb-0" style={{width:"90%", height:"30%"}}/>
       </div>
       
      <ul className='dash-list justify-content-center d-flex mt-0'>
        <li> <DashboardIcon style={{ marginLeft:"12%"}} className='iconn fs-3 '/><Link  className="fs-3" to={`/dashboard`}> Dashboard </Link></li>
        <li><AccountCircleIcon style={{ marginLeft:"12%"}}className='iconn fs-3 '/><Link to={`/profile/${userId}` }className="fs-3"> Profile </Link></li>
        <li><LogoutIcon style={{marginLeft:"12%"}} className='iconn fs-2 fw-bold'/> <Link to="/" className="fs-3">  Logout</Link></li>
       


      </ul>
    </div>
  )
}

export default Sider
