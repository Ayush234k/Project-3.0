import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import RateReviewIcon from '@mui/icons-material/RateReview';
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import ThreePIcon from '@mui/icons-material/ThreeP';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';


export default function Leftpanel() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
         
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width:'15%',
            boxSizing: 'border-box',
            background:'black',
            color:'white',

          },
        }}
        variant="permanent"
        anchor="left"
      >
        
        <Divider />
        <List sx={{paddingTop:'50px'}}>
          {['Dashboard', 'Menu', 'Feedback','Accounts','Support','Settings','Logout'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{color:'white'}}>
                {(() => {
                      switch (index) {
                        case 0:
                          return <DashboardIcon />;
                        case 1:
                            return <RestaurantMenuIcon />;
                        case 2:
                            return <RateReviewIcon />;
                        case 3:
                            return <GroupRemoveIcon />;
                        case 4:
                            return <ThreePIcon/>;
                        case 5:
                            return <SettingsIcon />;
                        case 6:
                            return <LogoutIcon/>

                      }
                    })()}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
     
       
        
      </Box>
    </Box>
  );
}
