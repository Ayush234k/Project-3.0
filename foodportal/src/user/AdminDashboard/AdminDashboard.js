import View from "./View/View";
import Rightpanel from "./Calendar/Rightpanel.js";
import Mid from  "./Middle/Mid.js";
import Leftpanel from "./Dash/Leftpanel.js";
function AdminDashBoard() {
  return (
    <div className="App">
      
      <View />
      <Leftpanel/>
      <Mid/>
      <Rightpanel/>
    </div>
  );
}

export default AdminDashBoard;
