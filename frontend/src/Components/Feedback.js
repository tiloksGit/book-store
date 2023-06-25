import React from "react";

export const Feedback = () => {
  return (
    <form className="contact-form">
      <h1>FEEDBACK FORM</h1>
      <p>1.Enter your name:</p>
      <input type="text" name="" id="" placeholder="your name.."></input>
      <br></br>
      <p>2.Enter your email:</p>
      <input type="text" name="" id="" placeholder="your name.."></input>
      <br></br>
      <p>3.Enter your phoneno:</p>
      <input type="text" name="" id="" placeholder="your name.."></input>
      <br></br>

      <p>Enter your feedback on this website</p>
      <input
        type="textfield"
        name=""
        id=""
        placeholder="your name.."
        width={500}
        height={500}
      ></input>
      <br></br>
      <br></br>

      <button type="submit">submit</button>
    </form>
  );
};
