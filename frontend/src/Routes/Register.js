import React, { useState } from "react";
import "../styles/register.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [branch, setBranch] = useState("");
  const [semester, setSemester] = useState("");
  const [img, setImg] = useState();
  const [passwd, setPasswd] = useState("");
  const [cnfPasswd, setCnfPasswd] = useState("");
  const [email, setEmail] = useState("");
  const [allOk, setAllOk] = useState(false);
  const [passwdErr, setPasswdErr] = useState("");

  const [isRegistered, setIsRegistered] = useState(false);
  const [msg, setMsg] = useState("");
  const options = ["CSE", "EE", "ME", "IE", "CE"];
  const semesterOptions = [1, 2, 3, 4, 5, 6, 7, 8];
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (allOk) {
      const formData = new FormData();
      formData.append("username", userName);
      formData.append("branch", branch);
      formData.append("password", cnfPasswd);
      formData.append("semester", semester);
      formData.append("emailID", email);
      if (img) formData.append("img", img);
      console.log(formData);

      try {
        const response = await fetch(
          "https://mini-project-backend-4ylv.onrender.com/register/",
          {
            method: "POST",
            body: formData,
          }
        );

        const responseData = await response.json();

        if (response.status === 201) {
          setMsg(
            "Congratulations you are now a registered member the community"
          );
          setIsRegistered(true);
        } else if (response.status === 409) {
          alert(responseData.message);
        } else {
          alert(responseData.message);
        }
      } catch (err) {
        alert(err.message);
      } finally {
        setAllOk(false);
        setUserName("");
        setPasswd("");
        setCnfPasswd("");
        setBranch("");
        setSemester();
        setImg(null);
        setAllOk(false);
        setEmail("");
      }
    }
  };

  const handlePasswd = (e) => {
    if (e.target.value === passwd) {
      setCnfPasswd(e.target.value);
      setPasswdErr("");
      setAllOk(true);
    } else {
      setPasswdErr("(Password Mismatch)");
    }
  };

  return (
    <div className="register-container">
      {isRegistered ? (
        <>
          <p>{msg}</p>
          <Link to="/login"> Sign in</Link>
        </>
      ) : (
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="name">Username : </label>
          <input
            type="text"
            placeholder="name"
            id="name"
            required
            name="name"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
          <label htmlFor="branch">Branch :</label>
          <input
            list="options"
            placeholder="Branch"
            required
            id="branch"
            onChange={(e) => {
              setBranch(e.target.value);
            }}
          />
          <datalist id="options">
            {options.map((option) => (
              <option key={option} value={option} />
            ))}
          </datalist>
          <label htmlFor="semester">Semester :</label>
          <input
            list="semes"
            id="semester"
            name="semester"
            required
            placeholder="Semester"
            onChange={(e) => {
              setSemester(e.target.value);
            }}
          />
          <datalist id="semes">
            {semesterOptions.map((sem) => (
              <option key={sem} value={sem} />
            ))}
          </datalist>
          <label htmlFor="img">Upload your avatar :</label>
          <input
            className="img-upload"
            type="file"
            id="img"
            onChange={(e) => {
              setImg(e.target.files[0]);
            }}
          />
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            required
            id="email"
            placeholder="email@example.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="password">Password :</label>
          <input
            type="text"
            placeholder="Password"
            required
            id="password"
            value={passwd}
            onChange={(e) => setPasswd(e.target.value)}
          />
          <label htmlFor="cnf-passwd">
            Confirm password : {passwdErr ? passwdErr : ""}
          </label>
          <input
            type="password"
            required
            placeholder="Password"
            value={cnfPasswd}
            id="cnf-passwd"
            onChange={(e) => {
              handlePasswd(e);
              setCnfPasswd(e.target.value);
            }}
          />
          <button className="submit-btn"> Submit </button>
        </form>
      )}
    </div>
  );
};

export default Register;
