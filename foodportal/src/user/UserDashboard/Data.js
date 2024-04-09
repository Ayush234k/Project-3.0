import DashboardIcon from "@mui/icons-material/Dashboard";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import RateReviewIcon from "@mui/icons-material/RateReview";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import ThreePIcon from "@mui/icons-material/ThreeP";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export const LeftSidebarData = [
  {
    icon: DashboardIcon,
    title: "Dashboard",
    path: "/login",
  },
  {
    icon: RestaurantMenuIcon,
    title: "Entire Menu",
    path: "/entireMenu",
  },
  {
    icon: RateReviewIcon,
    title: "Feedback",
    path: "/feedback",
  },
  {
    icon: NewReleasesIcon,
    title: "Notice",
    path: "/notice",
  },
  {
    icon: ThreePIcon,
    title: "Contact Us",
    path: "/contact",
  },
  {
    icon: SettingsIcon,
    title: "Settings",
    path: "/settings",
  },
  {
    icon: LogoutIcon,
    title: "Log Out",
    path: "/logout",
  },
];

export const CardsData = [
  {
    title: "Breakfast",
    color: {
      background: "#397E62",
      color: "white"
    },
    body: "Idli/Uttapam, Sambar, Chutney, Bread, Butter, Jam, Coffee",
  },
  {
    title: "Lunch",
    color: {
      background: "#397E62", 
      color: "white"
    },
    body: "Paneer Kofta Curry, Mixed Boiled Vegetable, Egg Curry, Dal, Rice, Roti, Plain Dahi",
  },
  {
    title: "Snacks",
    color: {
      background: "#397E62", 
      color: "white"
    },
    body: "Maggi, Tea",
  },
  {
    title: "Dinner",
    color: {
      background: "#397E62", 
      color: "white"
    },
    body: "Paneer Aloo Chatpata, Mixed Boiled Vegetable, Dal, Rice, Roti, Rasgula",
  },

];
