import React, { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "./OAuth";

const SignUp = () => {
  const [formdata, setFormData] = useState({});
  const handelChange = (e) => {
    setFormData({
      ...formdata,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          placeholder="username"
          id="username"
          className="border p-3 rounded-lg"
          onChange={handelChange}
        />
        <input
          type="email"
          name=""
          placeholder="Email"
          id="email"
          className="border p-3 rounded-lg"
          onChange={handelChange}
        />
        <input
          type="password"
          name=""
          placeholder="password"
          id="password"
          className="border p-3 rounded-lg"
          onChange={handelChange}
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          SingUp
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p className="font-semibold">Have an Account?</p>
        <Link to={"/login"}>
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
