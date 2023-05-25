import { useContext, useState } from "react";
import dataContext from "../../dataContext";

const Upload = () => {
  const { userName, id, accessToken } = useContext(dataContext);
  const [bookname, setBookname] = useState("");
  const [author, setAuthor] = useState("");
  const [expecPrice, setExpecPrice] = useState("");
  const [passwd, setPasswd] = useState("");
  const [branch, setBranch] = useState("");
  const [img, setImg] = useState("");
  const options = ["CSE", "EE", "ME", "IE", "CE"];
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState();
  let user = JSON.parse(localStorage.getItem("user"));
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwd !== user.emailID) {
      setErr("email doesn't match");
      return;
    }
    setIsLoading(true);

    try {
      const validUser = await fetch(
        "https://mini-project-backend-4ylv.onrender.com/users/profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ username: userName }),
        }
      );
      if (validUser.status === 200) {
        const formData = new FormData();
        formData.append("bookname", bookname);
        formData.append("author", author);
        formData.append("userId", id);
        formData.append("branch", branch);
        formData.append("expecPrice", expecPrice);
        formData.append("img", img);
        const response = await fetch(
          "https://mini-project-backend-4ylv.onrender.com/books",
          {
            method: "POST",
            body: formData,
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setIsLoading(false);
        const responseData = await response.json();
        if (response) {
          alert(responseData.message);
        }
      } else {
        alert(validUser.status);
      }
    } catch (err) {
      alert(err.message);
    } finally {
      setBookname("");
      setExpecPrice("");
      setImg("");
      setAuthor("");
      setBranch("");
      setPasswd("");
    }
  };

  const load = <>Loading...</>;

  return (
    <>
      {isLoading ? (
        load
      ) : (
        <div className="register-container">
          <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="name">Title of the Book : </label>
            <input
              type="text"
              placeholder="Book name"
              id="name"
              required
              name="name"
              value={bookname}
              onChange={(e) => setBookname(e.target.value)}
            />
            <label htmlFor="author">Author of the book : </label>
            <input
              type="text"
              placeholder="Author"
              id="author"
              required
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            <label htmlFor="branch">Branch :</label>
            <input
              list="options"
              placeholder="Branch"
              required
              id="branch"
              onSelect={(e) => setBranch(e.target.value)}
            />
            <datalist id="options">
              {options.map((option) => (
                <option key={option} value={option} />
              ))}
            </datalist>
            <label htmlFor="img">Upload cover page of the book:</label>
            <input
              className="img-upload"
              type="file"
              required
              id="img"
              onChange={(e) => {
                setImg(e.target.files[0]);
              }}
            />
            <label htmlFor="price">set Price for the book : </label>
            <input
              type="text"
              placeholder="in Rs."
              id="price"
              required
              name="price"
              value={expecPrice}
              onChange={(e) => setExpecPrice(e.target.value)}
            />
            <label htmlFor="password">
              Confirm your email :{err ? err : ""}
            </label>
            <input
              type="email"
              placeholder="Email"
              required
              id="password"
              onChange={(e) => setPasswd(e.target.value)}
            />
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Upload;
