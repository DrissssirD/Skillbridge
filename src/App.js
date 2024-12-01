import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/landingpage/landingPage";
import { SignUp } from "./pages/SignUpPage/SignUp";
import { Login } from "./pages/Loginpage/LoginPage";
import { DashBoard } from "./pages/dashboard/dashboard";
import { HomePage } from "./pages/dashboard/homepage";
import { Messages } from "./pages/dashboard/messages";
import { MyApplication } from "./pages/dashboard/myapplication";
import { FindJob } from "./pages/dashboard/findJob";
import { Profile } from "./pages/dashboard/profile";
import {Setting} from "./pages/dashboard/setting";
import { HelpCenter } from "./pages/dashboard/helpCenter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<DashBoard />}>
        <Route index element={<HomePage />} />
        <Route path="Home" element={<HomePage />} />
        <Route path="Messages" element={<Messages />} />
        <Route path="My-application" element={<MyApplication />} />
        <Route path="Find-job" element={<FindJob />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Settings" element={<Setting />} />
        <Route path="HelpCenter" element={<HelpCenter />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
