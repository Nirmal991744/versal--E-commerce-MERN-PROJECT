import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.currentUser);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-semibold text-gray-700">
          Please login first.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-sm w-full bg-white p-8 rounded-xl shadow-lg text-center">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Avatar"
          className="w-24 h-24 mx-auto mb-4 rounded-full border-2 border-blue-500"
        />
        <h2 className="text-xl font-bold text-gray-800 mb-1">{user.name}</h2>
        <p className="text-gray-600 capitalize">Gender: {user.gender}</p>

        <button
          onClick={handleLogout}
          className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
