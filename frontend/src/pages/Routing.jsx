import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Layout from "./Layout";
import Links from "./Links";
import Appearance from "./Appearance";
import Analytics from "./Analytics";
import Setting from "./Setting";
import Choose from "./Choose";
import Frame from "../components/Frame";

function Routing() {
  return (
    <Routes>
      {/* Routes without Layout */}
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/choose" element={<Choose />} />
      <Route path="/frame/:id" element={<Frame />} />

      {/* Default route, redirect to /signup */}
      <Route path="/" element={<Navigate to="/signup" />} />

      {/* Routes with Layout */}
      <Route element={<Layout />}>
        <Route path="/links" element={<Links />} />
        <Route path="/appearance" element={<Appearance />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/setting" element={<Setting />} />
      </Route>
    </Routes>
  );
}

export default Routing;
