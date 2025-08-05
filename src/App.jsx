import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import WishListItems from "./components/WishListItem";
import SignIn from "./components/Signin";
import Login from "./components/Login";
import AddItems from "./components/AddItems";
import Profile from "./components/Profile";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/additems" element={<AddItems />} />
          <Route path="/cart" element={<WishListItems />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
App;
