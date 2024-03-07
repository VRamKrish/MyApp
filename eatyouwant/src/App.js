import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginUser from "./screens/user/login";
import DashboardUser from "./screens/user/dashboard";

import LoginChef from "./screens/chef/login";
import DashboardChef from "./screens/chef/dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="user"> */}
        <Route path="/login" element={<LoginUser />} />
        <Route path="/dashboard" element={<DashboardUser />} />
        <Route path="*" element={<DashboardUser />} />
        {/* </Route> */}
        {/* <Route path="chef">
          <Route path="/login" element={<LoginChef />} />
          <Route path="/dashboard" element={<DashboardChef />} />
        </Route>*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
