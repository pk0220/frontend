import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const AdminHome = () => {

  const [userData,setUserData]=useState(null);

  useEffect(() => {

      let user=sessionStorage.getItem("user")
      if(user){
       
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
        </Toolbar>
      </AppBar>
    </Box>
  </>;
};

export default AdminHome;