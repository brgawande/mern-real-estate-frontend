import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { deleteuser, signout } from "../../redux/actions/userAction";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  // console.log(user);
  const userid = user._id;

  const deleteHandler = async () => {
    console.log(userid);
    // await dispatch(deleteuser(userid));
    // console.log(user.isAuthenticated);
    // {
    //   isAuthenticated ? navigate("/profile") : navigate("/login");
    // }
  };

  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <input
          className="hidden"
          type="file"
          name=""
          accept="image/*"
          id=""
          ref={fileRef}
        />
        <img
          onClick={() => fileRef.current.click()}
          src={user.avatar}
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
          alt="profile"
        />
        <input
          type="text"
          className="border p-3 rounded-lg"
          placeholder="username"
          id="username"
        />
        <input
          type="email"
          className="border p-3 rounded-lg"
          placeholder="email"
          id="email"
        />
        <input
          type="password"
          className="border p-3 rounded-lg"
          placeholder="password"
          id="password"
        />
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
          Update
        </button>
        <Link
          className="bg-green-700 text-white p-3 rounded-lg uppercase text-center"
          to={"/create-listing"}
        >
          Create Listing
        </Link>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer" onClick={deleteHandler}>
          Delete Account
        </span>
        <span className="text-red-700 cursor-pointer" onClick={signoutHandler}>
          Sign Out
        </span>
      </div>
    </div>
  );
};

export default Profile;
