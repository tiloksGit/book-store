import { useState, useEffect } from "react";
import "../styles/authenticateUser.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import dataContext from "../dataContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSpinner } from "@fortawesome/free-solid-svg-icons";
const AuthenticateUser = () => {
  const {
    passwd,
    setPasswd,
    handleLogin,
    msg,
    errMsg,
    setErrMsg,
    name,
    setName,
    authPending,
    setAuthPending,
    FontAwesomeIcon,
    faSpinner,
  } = useContext(dataContext);
  // const [shouldRedirect, setShouldRedirect] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="layout">
      <div className="auth">
        {msg ? msg : errMsg ? <>{errMsg}</> : ""}
        <>
          <div className="auth-form-parent">
            <form className="authUser" onSubmit={handleLogin}>
              <label htmlFor="userName">Username : </label>
              <input
                id="userName"
                type="text"
                placeholder="Username"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <label htmlFor="passwd">Password : </label>
              <input
                type="password"
                id="passwd"
                placeholder="Password"
                required
                onChange={(e) => setPasswd(e.target.value)}
                value={passwd}
              />
              {authPending ? (
                <FontAwesomeIcon icon={faSpinner} spin />
              ) : (
                <button type="submit" className="login-btn">
                  Login
                </button>
              )}
            </form>
          </div>
          <div className="">
            Not registered yet ?
            <Link to="/register" className="signup-btn">
              Sign Up
            </Link>
          </div>
        </>
      </div>
    </div>
  );
};

export default AuthenticateUser;
