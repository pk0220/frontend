import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {

  const [userData,setUserData]=useState(null);

  useEffect(() => {

      let user=sessionStorage.getItem("user")
      if(user){
       // console.log(user);
        setUserData(user);
      }

  }, []);

  const navigate=useNavigate();
  return <>
    <Box sx={{ flexGrow: 'revert' }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>Bank E-Auction</Typography>

          <Button component={NavLink} to='/' style={({ isActive }) => { return { backgroundColor: isActive ? '#4169e1' : '' } }} sx={{ color: 'CaptionText', textTransform: '' }}>&#127968;Home</Button>
         
         {userData?
         (<div> 
           <Button onClick={ ()=>{ sessionStorage.removeItem("user");
          sessionStorage.removeItem("role");
         window.location="login"
        }} > LogOut </Button>
         </div>):
          (<Button component={NavLink} to='/login' style={({ isActive }) => { return { backgroundColor: isActive ? '#4169e1' : '' } }} sx={{ color: 'CaptionText', textTransform: 'none' }}>Login/Registration</Button>
         )
         }
          <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Category
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><Button component={NavLink} to='/Bunglow' style={({ isActive }) => { return { backgroundColor: isActive ? '#4169e1' : '' } }} sx={{ color: 'CaptionText', textTransform: 'none' }}>Bunglow</Button></li>
                                <li><button className="dropdown-item" onClick={()=>{Navigate.push("/fruits")}}>Gold</button></li>
                                <li><button className="dropdown-item" onClick={()=>{Navigate.push("/car")}}>car</button></li>
                                <li><button className="dropdown-item" onClick={()=>{Navigate.push("/grocery")}}>Plot</button></li>
                            </ul>
                        </div>
                  

          <Button component={NavLink} to='/AddDetails' style={({ isActive }) => { return { backgroundColor: isActive ? '#4169e1' : '' } }} sx={{ color: 'CaptionText', textTransform: 'none' }}>Add Details</Button>

          <Button component={NavLink} to='/contact' style={({ isActive }) => { return { backgroundColor: isActive ? '#4169e1' : '' } }} sx={{ color: 'CaptionText', textTransform: 'none' }}>About Us</Button>
          



        </Toolbar>
      </AppBar>
    </Box>
  </>;
};

export default Navbar;
