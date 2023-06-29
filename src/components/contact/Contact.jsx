import React from "react";
import { useState } from "react";
import { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const initialText = "Ping Me!";
  const [buttonText, setButtonText] = useState(initialText);
  function handleClick() {
    setButtonText("Thanks!");
    setTimeout(() => {
      setButtonText(initialText);
    }, 1500);
  }
  const [full_name, setName] = useState("");
  const [email_add, setEmail] = useState("");
  const [text_area, setMessage] = useState("");
  let regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validate = () => {
    return full_name.length && regEmail.test(email_add) && text_area.length;
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lxrj9qj",
        "template_1zkp9g4",
        form.current,
        "8cBz-OgtsM6howFwF"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // e.target.reset(); not working
  };

  return (
    <div id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>avinashsaklani7@gmail.com</h5>
            <a href="mailto:avinashsaklani7@gmail.com"> Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+91 9625946057</h5>
            <a
              href="https://wa.me/+919625946057?text=Hi!%20Just%20saw%20your%20portfolio"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={full_name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your valid email address"
            value={email_add}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            name="message"
            rows="10"
            placeholder="Type your message..."
            value={text_area}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary contact-btn"
            onClick={handleClick}
            disabled={!validate}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
