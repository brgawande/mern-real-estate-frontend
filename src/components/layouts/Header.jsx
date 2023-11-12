import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { loading, isAuthenticated, user, message, error } = useSelector(
    (state) => state.user
  );
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Real</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg  flex items-center">
          <input
            type="text"
            name=""
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64 md:w-70 lg:w-80"
            id=""
          />
          <SearchIcon />
        </form>
        <div className="flex items-center justify-between gap-4">
          <Link
            to={"/"}
            className="hidden sm:inline font-bold text-slate-700 hover:underline"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="hidden sm:inline font-bold text-slate-700 hover:underline"
          >
            About
          </Link>
          {isAuthenticated ? (
            <Link to={"/profile"}>
              <img
                className="rounded-full h-7 w-7 object-cover"
                src={user && user.avatar}
                alt="profile"
              />
            </Link>
          ) : (
            <Link
              to={"/login"}
              className="font-bold text-slate-700 hover:underline"
            >
              Sign-In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
