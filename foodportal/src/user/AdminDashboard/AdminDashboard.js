import View from "./View/View";
import Rightpanel from "./Calendar/Rightpanel.js";
import Mid from  "./Middle/Mid.js";
import './AdminDashboard.css';
//import Leftpanel from "./Dash/Leftpanel.js";
import Sidebar from "./Sidebar/Sidebar.js";
function AdminDashBoard() {
  return (
    <div className="App">
      <div className="AppGlass">
      {/* <View /> */}
      <Sidebar/>
      <Mid/>
      <Rightpanel/>
    </div>
    </div>
  );
}

export default AdminDashBoard;
