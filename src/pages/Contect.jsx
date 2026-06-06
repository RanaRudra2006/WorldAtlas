import React, { useState } from "react";

const Contect = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const submitHendler = (e) => {
    e.preventDefault();
    console.log(username);
    console.log(email);
    console.log(msg);
    setUsername("");
    setEmail("");
    setMsg("");
  };

  return (
    <div className="section-contect">
      <h2 className="container-title">Contect Us</h2>
      <div className="contact-wrapper container">
        <form
          onSubmit={(e) => {
            submitHendler(e);
          }}
        >
          <input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="form-control"
            type="text"
            required
            autoCapitalize="false"
            placeholder="Enter your name"
            name="username"
            value={username}
          />

          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-control"
            type="text"
            required
            autoCapitalize="false"
            placeholder="Enter your email"
            name="email"
          />

          <textarea
            onChange={(e) => {
              setMsg(e.target.value);
            }}
            className="form-control"
            rows={10}
            placeholder="Enter your message"
            name="message"
            required
            autoCapitalize="false"
          ></textarea>

          <button type="submit" onClick={submitHendler}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contect;
