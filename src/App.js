import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="*" element={<Navigate to="/" />}></Route>
          <Route path="/" element={<Users />}></Route>
          <Route path="/:userId/places" element={<UserPlaces />}></Route>
          <Route path="/places/new" element={<NewPlace />}></Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
