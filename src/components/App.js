import React from "react";
import Signup from "./SignUp";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import Landing from "./Landing.jsx";
import Public from "./Public";
import Manufacturer from "./Manufacturers";
import Shipment from "./Shipment";
function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/public" component={Public} />
            <PrivateRoute path="/manufacturer" component={Manufacturer} />
            <PrivateRoute path="createshipment" component={Shipment} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/updateprofile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
