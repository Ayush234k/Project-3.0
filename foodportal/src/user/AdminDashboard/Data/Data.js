import DashboardIcon from '@mui/icons-material/Dashboard';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import RateReviewIcon from '@mui/icons-material/RateReview';
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import ThreePIcon from '@mui/icons-material/ThreeP';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
 export const SidebarData = [
  { icon: < DashboardIcon/>, 
    heading: "Dashboard" 
  },
  {
    icon: <RestaurantMenuIcon/>,
    heading: "Orders",
  },
  {
    icon:< RateReviewIcon/>,
    heading: "Customers",
  },
  {
  icon:<GroupRemoveIcon/>,
  heading:'Account'}
  ,{
    icon:<ThreePIcon/>,
    heading:'Support'
  },
  {
    icon:<SettingsIcon/>,
    heading:'Setting'
  },
  {
    icon:<LogoutIcon/>,
    heading:'Logout'
  },
]
