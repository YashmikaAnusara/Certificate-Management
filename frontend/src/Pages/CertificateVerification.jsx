import React, { useState } from "react";
import "../CSS/CertificateVerification.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Logo from "../Assets/vaild.png";
import Logo1 from "../Assets/invaild.png";
import axios from "axios";
import Port from "../port";

export default function CertificateVerification() {
  const [certificate_v, setcertificate_v] = useState("");
  const [certificate_n, setcertificate_n] = useState("");
  const [open, setOpen] = useState(false);
  const [close, setclose] = useState(false);
  const [photo, setphoto] = useState("");
  const [word, setword] = useState("");

  const isOpen = () => {
    setOpen(!open);
    setclose(!close);
  };

  const submit = () => {
    axios
      .get(
        `http://${Port}:8070/student/certificateverification/${certificate_v}/${certificate_n}`
      )
      .then((res) => {
        if (res.data === 0) {
          setOpen(true);
          setphoto(false);
          setword(false);
        } else {
          setOpen(true);
          setphoto(true);
          setword(true);
        }
      })
      .catch((err) => {
        alert("Database not");
      });
  };
  return (
    <div>
      {!open && (
        <div className="modal">
          <Box
            component="form"
            sx={{
              "& .MuiFormControl-root": { m: 1, width: "45ch" },
              "& .MuiButton-root": { m: 1, width: "50ch" },
            }}
            display="grid"
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Enter the Certificate Verification ID"
              variant="outlined"
              onChange={(e) => {
                setcertificate_v(e.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Enter the Certificate Student Name"
              variant="outlined"
              onChange={(e) => {
                setcertificate_n(e.target.value);
              }}
            />
            <Button onClick={submit} variant="contained">
              verifie
            </Button>
          </Box>
        </div>
      )}
      <center>
        {open && (
          <div className="popup-container">
            {photo ? (
              <img
                src={Logo}
                alt=""
                width="100px"
                style={{ marginTop: "50px" }}
              />
            ) : (
              <img
                src={Logo1}
                alt=""
                width="100px"
                style={{ marginTop: "50px" }}
              />
            )}
            {word ? (
              <h1 className="pop-pra">This Certificate Is Valid!</h1>
            ) : (
              <h1 className="pop-pra">This Certificate Is Invalid!</h1>
            )}
            <div className="pop-button">
              <Button onClick={isOpen} variant="contained">
                Close
              </Button>
            </div>
          </div>
        )}
      </center>
    </div>
  );
}
