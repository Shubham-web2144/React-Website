import React from "react";
import "./style.css";

const Contact = () => {
  return (
    <div className="contact">
      <h3> Contact Us</h3>
      <form>
        <div className="form_field">
          <label>Email</label>
          <input type="text" placeholder="enter your mail" />
        </div>
        <div className="form_field">
          <label>Enter Message</label>
          <input type='text' className="textarea" placeholder="enter your message..."/>
        </div>
        <button type="submit" className="contact_btn">
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
