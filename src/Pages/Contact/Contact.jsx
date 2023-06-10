import React from "react";
import "./Contact.css";
import AppWrap from "../../Wrapper/AppWrap/AppWrap";
import BackgroundCard from "../../Wrapper/BackgroundCard/BackgroundCard";
import Swal from "sweetalert2";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import emailjs from "emailjs-com";
import { ImLinkedin } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GiSmartphone } from "react-icons/gi";
import ButtonIcon from "../../Components/ButtonIcon/ButtonIcon";

function Contact() {
  const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
  const USER_ID = process.env.REACT_APP_USER_ID;

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = e.target.elements;
    let conFom = {
      from_name: name.value + " " + email.value,
      to_name: "Jhelan",
      message: message.value,
    };
    emailjs.send(SERVICE_ID, TEMPLATE_ID, conFom, USER_ID).then(
      (result) => {
        Swal.fire(
          "Message Successfully Sent",
          "Thank you for checking my portfolio and sending a message. I will get back to you as soon as possible.",
          "success"
        );
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  const handleCall = () => {
    Swal.fire("Phone number: 07496722220");
  };
  return (
    <div className="container mt-5 ">
      <div className="page-title">Contact Me</div>
      <br />
      <Stack direction="row" justifyContent="flex-end" spacing={1.5}>
        <ButtonIcon
          Component={GiSmartphone}
          comment={"Connect to Phone"}
          handleClick={handleCall}
          iconColor={"black"}
        />
        <ButtonIcon
          Component={FaGithub}
          comment={"Connect to GitHub"}
          handleClick={() =>
            window.open("https://github.com/RyanJKS", "_blank")
          }
          iconColor={"black"}
        />
        <ButtonIcon
          Component={ImLinkedin}
          comment={"Connect to LinkedIn"}
          handleClick={() =>
            window.open(
              "https://www.linkedin.com/in/jhelan-suggun-jks7n99/",
              "_blank"
            )
          }
          iconColor={"#0072b1"}
        />
        <ButtonIcon
          Component={SiGmail}
          comment={"Connect to Mail"}
          handleClick={() =>
            window.open("mailto:jksuggun@hotmail.co.uk", "_blank")
          }
          iconColor={"#DB4437"}
        />
      </Stack>
      <br />
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            rows="15"
            cols="40"
            className="form-control"
            id="message"
            required
          />
        </div>
        <Button variant="contained" type="submit" size="large">
          Send
        </Button>
      </form>
    </div>
  );
}

export default AppWrap(BackgroundCard(Contact), "Contact Me");
