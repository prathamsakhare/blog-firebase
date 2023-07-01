import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import CreatePost from "./components/CreatePost";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
function App() {
  const [isAuth, setIsAuth] = useState(false);
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      // ! the way other than useNavigate to redirect to pages is --
      window.location.pathname = "/login";
    });
  };
  return (
    <Router>
      <nav className="navbar">
        <Link className="nav-btn" to={"/"}>Home</Link>

        {!isAuth ? (
          <Link className="nav-btn" to={"/login"}>Login</Link>
        ) : (
          <>
            <Link className="nav-btn" to={"/createpost"}>Create Post</Link>
            <button className="nav-btn logout" onClick={signUserOut}>Log Out</button>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
