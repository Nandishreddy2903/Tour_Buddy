import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import avatar from "../../assets/images/avatar.jpg";
import Bookings from "./Bookings";
import BASE_URL from "../../utils/config";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile";
import { FaPen, FaTrashAlt } from "react-icons/fa"; // Add icons for better UX

const MyAccount = () => {
  const { user, dispatch, token } = useContext(AuthContext);
  const [tab, setTab] = useState("bookings");
  const [isDeleting, setIsDeleting] = useState(false); // For loading state during account deletion
  const [isUpdating, setIsUpdating] = useState(false); // For loading state during profile update
  const navigate = useNavigate();

  const confirmDelete = async () => {
    const result = window.confirm(
      "Are you sure you want to delete your account? This action is permanent."
    );
    if (result) {
      deleteAccount();
    }
  };

  const deleteAccount = async () => {
    setIsDeleting(true);
    try {
      const response = await fetch(`${BASE_URL}/user/users/${user._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const { message } = await response.json();

      if (!response.ok) {
        toast.error(message);
      } else {
        dispatch({ type: "LOGOUT" });
        navigate("/register");
        toast.success("Account deleted successfully.");
      }
    } catch (err) {
      toast.error("Server not responding");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <section>
      <div className="max-w-[1170px] py-4 px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <div className="py-[50px] px-[30px] rounded-md bg-gray-50">
            <div className="flex items-center justify-center">
              <figure className="w-[100px] h-[100px] rounded-full border-4 border-indigo-500">
                <img
                  src={avatar}
                  alt="User Avatar"
                  className="w-full h-full rounded-full"
                />
              </figure>
            </div>

            <div className="text-center mt-4">
              <h3 className="text-[18px] leading-[30px] text-indigo-700 font-bold">
                {user.username}
              </h3>
              <p className="text-gray-500 text-[15px] leading-6 font-medium">
                {user.email}
              </p>
            </div>

            <div className="mt-[50px] md:mt-[70px]">
              <button
                onClick={() => setTab("settings")}
                className="w-full mb-2 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition duration-300"
              >
                <FaPen className="mr-2" /> Update Name
              </button>
              <button
                onClick={confirmDelete}
                className="w-full py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md transition duration-300"
                disabled={isDeleting} // Disable the button during deletion process
              >
                {isDeleting ? "Deleting..." : <><FaTrashAlt className="mr-2" /> Delete Account</>}
              </button>
            </div>
          </div>

          <div className="col-span-2 md:px-[30px]">
            <div className="flex">
              <button
                onClick={() => setTab("bookings")}
                className={`${
                  tab === "bookings" && "bg-indigo-500 text-white font-bold"
                } p-2 mr-5 px-3 lg:px-5 rounded-md text-indigo-700 font-semibold text-[13px] md:text-[14px] lg:text-[16px] leading-7 border border-solid border-indigo-500 transition duration-300`}
              >
                My Bookings
              </button>
              <button
                onClick={() => setTab("settings")}
                className={`${
                  tab === "settings" && "bg-indigo-500 text-white font-bold"
                } p-2 mr-5 px-3 lg:px-5 rounded-md text-indigo-700 font-semibold text-[13px] md:text-[14px] lg:text-[16px] leading-7 border border-solid border-indigo-500 transition duration-300`}
              >
                Profile Settings
              </button>
            </div>

            {tab === "bookings" && <Bookings />}
            {tab === "settings" && (
              <Profile user={user} dispatch={dispatch} token={token} setIsUpdating={setIsUpdating} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyAccount;
