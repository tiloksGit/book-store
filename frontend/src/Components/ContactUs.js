import React from "react";

const Contact = () => {
  return (
    <form className="contact-form">
      <h1>CONTACT US</h1>
      <p>Enter your Name:</p>
      <input type="text" name="" id="" placeholder="username.."></input>
      <p>Enter your email:</p>
      <input type="text" name="" id="" placeholder="email.."></input>
      <p>Enter your phoneno:</p>
      <input type="text" name="" id="" placeholder="phoneno.."></input>
      <p>Enter your message:</p>
      <textarea name="" id="" placeholder="message.." rows="10"></textarea>
      <p>Enter your contact on this website</p>
      {/* <input
          type="textfield"
          name=""
          id=""
          placeholder="your name.."
          width={500}
          height={500}
        ></input>
        <br></br>
        <br></br> */}

      <button type="send">send</button>
    </form>
  );
};

export default Contact;
