import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/signin">Signin</Link>
            <Link to="/createPost">Create Post</Link>
            <Link to="/updatePost">Update Post</Link>
            <Link to="/deletePost">Delete Post</Link>
            <Link to="/readPosts">Read Posts</Link>
        </div>
    );
};