import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export const Navbar = () => {
    const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

  const signout = () => {
    setCookies("access_token", "");
    window.localStorage.clear();
    navigate("/signin");
  };
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/signin">Signin</Link>
            <Link to="/createPost">Create Post</Link>
            <Link to="/updatePost">Update Post</Link>
            <Link to="/deletePost">Delete Post</Link>
            <Link to="/readPosts">Read Posts</Link>
            {!cookies.access_token ? (
        <Link to="/signin">Signin</Link>
      ) : (
        <button onClick={signout}> Signout </button>
      )}
        </div>
    );
};