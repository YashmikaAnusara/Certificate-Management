import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import "../CSS/Requsetpage.css";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function RequestForm() {
  const [w_ms_email_id, setw_ms_email_id] = useState(false);
  const [w_a_submission_d, setw_a_submission_d] = useState(false);
  const [w_name, setw_name] = useState(false);
  const [w_email, setw_email] = useState(false);
  const [w_p_number, setw_p_number] = useState(false);
  const [w_nic, setw_nic] = useState(false);
  const [w_organization, setw_organization] = useState(false);
  const [w_occupation, setw_occupation] = useState(false);
  const [w_name_c_attended, setw_name_c_attended] = useState(false);
  const [w_name_lecturer, setw_name_lecturer] = useState(false);
  const [w_s_date_course, setw_s_date_course] = useState(false);
  const [w_e_date_course, setw_e_date_course] = useState(false);
  const [w_c_o_a_submission, setw_c_o_a_submission] = useState(false);
  const [w_tvec_certificate, setw_tvec_certificate] = useState(false);
  const [w_k_a_cadd_center, setw_k_a_cadd_center] = useState(false);
  const [w_r_cadd_center, setw_r_cadd_center] = useState(false);
  const [w_r_l_experience, setw_r_l_experience] = useState(false);
  const [w_l_t_proficiency, setw_l_t_proficiency] = useState(false);
  const [w_s_coordination, setw_s_coordination] = useState(false);
  const [w_c_fee_payment, setw_c_fee_payment] = useState(false);
  const [w_c_person, setw_c_person] = useState(false);
  const [w_feedbak, setw_feedbak] = useState(false);

  const vertical = "top";
  const horizontal = "right";

  const [ms_email_id, setms_email_id] = useState("");
  const [a_submission_d, seta_submission_d] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [p_number, setp_number] = useState("");
  const [nic, setnic] = useState("");
  const [organization, setorganization] = useState("");
  const [occupation, setoccupation] = useState("");
  const [class_id, setclass_id] = useState("");
  const [name_cerificate, setname_cerificate] = useState("");
  const [name_c_attended, setname_c_attended] = useState("");
  const [name_lecturer, setname_lecturer] = useState("");
  const [s_date_course, sets_date_course] = useState("");
  const [e_date_course, sete_date_course] = useState("");
  const [c_o_a_submission, setc_o_a_submission] = useState("");
  const [tvec_certificate, settvec_certificate] = useState("");
  const [k_a_cadd_center, setk_a_cadd_center] = useState("");
  const [r_cadd_center, setr_cadd_center] = useState("");
  const [r_l_experience, setr_l_experience] = useState("");
  const [l_t_proficiency, setl_t_proficiency] = useState("");
  const [s_coordination, sets_coordination] = useState("");
  const [c_fee_payment, setc_fee_payment] = useState("");
  const [c_person, setc_person] = useState("");
  const [feedbak, setfeedbak] = useState("");
  const [bank_slip, setbank_slip] = useState("");

  const submithandler = (e) => {
    const data = {
      ms_email_id,
      a_submission_d,
      name,
      email,
      p_number,
      nic,
      organization,
      occupation,
      class_id,
      name_cerificate,
      name_c_attended,
      name_lecturer,
      s_date_course,
      e_date_course,
      c_o_a_submission,
      tvec_certificate,
      k_a_cadd_center,
      r_cadd_center,
      r_l_experience,
      l_t_proficiency,
      s_coordination,
      c_fee_payment,
      c_person,
      feedbak,
      bank_slip,
    };
    if (ms_email_id == "") {
      setw_ms_email_id(true);
    } else if (a_submission_d == "") {
      setw_a_submission_d(true);
    } else if (name == "") {
      setw_name(true);
    } else if (email == "") {
      setw_email(true);
    } else if (p_number.length !== 10) {
      setw_p_number(true);
    } else if (nic.length != 10) {
      setw_nic(true);
    } else if (organization == "") {
      setw_organization(true);
    } else if ((occupation = "")) {
      setw_occupation(true);
    } else if (name_c_attended == "") {
      setw_name_c_attended(true);
    } else if (name_lecturer == "") {
      setw_name_lecturer(true);
    } else if (s_date_course == "") {
      setw_s_date_course(true);
    } else if (e_date_course == "") {
      setw_e_date_course(true);
    } else if (c_o_a_submission == "") {
      setw_c_o_a_submission(true);
    } else if (tvec_certificate == "") {
      setw_tvec_certificate(true);
    } else if (k_a_cadd_center == "") {
      setw_k_a_cadd_center(true);
    } else if (r_cadd_center == "") {
      setw_r_cadd_center(false);
    } else if (r_l_experience) {
      setw_r_l_experience(false);
    } else if (l_t_proficiency == "") {
      setw_l_t_proficiency(true);
    } else if (s_coordination == "") {
      setw_s_coordination(true);
    } else if (c_fee_payment == "") {
      setw_c_fee_payment(true);
    } else if (c_person == "") {
      setw_c_person(true);
    } else if (feedbak == "") {
      setw_feedbak(true);
    } else {
      axios.post(`http://localhost:8070/student/requset`, data).then((res) => {
        console.log("Data Added");
      });
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setw_ms_email_id(false);
    setw_a_submission_d(false);
    setw_name(false);
    setw_email(false);
    setw_p_number(false);
    setw_nic(false);
    setw_organization(false);
    setw_occupation(false);
    setw_name_c_attended(false);
    setw_name_lecturer(false);
    setw_s_date_course(false);
    setw_e_date_course(false);
    setw_c_o_a_submission(false);
    setw_tvec_certificate(false);
    setw_k_a_cadd_center(false);
    setw_r_cadd_center(false);
    setw_r_l_experience(false);
    setw_l_t_proficiency(false);
    setw_s_coordination(false);
    setw_c_fee_payment(false);
    setw_c_person(false);
    setw_feedbak(false);
  };

  return (
    <div className="FromeBody">
      <div className="FromeCon">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "55ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="MS Teams EmailID :"
            variant="outlined"
            value={ms_email_id}
            onChange={(e) => {
              setms_email_id(e.target.value);
            }}
            required
          />
          <TextField
            label="Assignment submission date :"
            variant="outlined"
            type="date"
            value={a_submission_d}
            onChange={(e) => {
              seta_submission_d(e.target.value);
            }}
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
          <TextField
            label="Name (as in NIC/Passport) for entering on cetificate :"
            variant="outlined"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
            required
          />
          <TextField
            label="Email Address :"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            required
          />
          <TextField
            label="Phone Number :"
            variant="outlined"
            type="number"
            value={p_number}
            onChange={(e) => {
              setp_number(e.target.value);
            }}
            required
          />
          <TextField
            label="NIC :"
            variant="outlined"
            type="email"
            value={nic}
            onChange={(e) => {
              setnic(e.target.value);
            }}
            required
          />
        </Box>
        <Box
          sx={{
            width: 966,
            maxWidth: "100%",
            m: 1,
          }}
        >
          <TextField
            fullWidth
            label="Organization/School/Institution/University :"
            variant="outlined"
            value={organization}
            onChange={(e) => {
              setorganization(e.target.value);
            }}
            required
          />
        </Box>
        <div className="radiobutton">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Occupation :
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              value={occupation}
              onChange={(e) => {
                setoccupation(e.target.value);
              }}
            >
              <FormControlLabel
                value="Student"
                control={<Radio />}
                label="Student"
              />
              <FormControlLabel
                value="Awaiting Employment"
                control={<Radio />}
                label="Awaiting Employment"
              />
              <FormControlLabel
                value="Working Professional"
                control={<Radio />}
                label="Working Professional"
              />
              <FormControlLabel
                value="Self Employed/Entrepreneur"
                control={<Radio />}
                label="Self Employed/Entrepreneur"
              />
              <FormControlLabel
                value="Teacher/Lecturer/Academic"
                control={<Radio />}
                label="Teacher/Lecturer/Academic"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "55ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            label="Class ID (Leave blank if unknown) :"
            variant="outlined"
            value={class_id}
            onChange={(e) => {
              setclass_id(e.target.value);
            }}
          />
          <TextField
            label="Name of Certificate applying for? (Leave blank if unknown) :"
            variant="outlined"
            value={name_cerificate}
            onChange={(e) => {
              setname_cerificate(e.target.value);
            }}
          />
          <TextField
            label="Name of the Course Attended :"
            variant="outlined"
            value={name_c_attended}
            onChange={(e) => {
              setname_c_attended(e.target.value);
            }}
            required
          />
          <TextField
            label="Name of the Lecturer :"
            variant="outlined"
            value={name_lecturer}
            onChange={(e) => {
              setname_lecturer(e.target.value);
            }}
            required
          />
          <TextField
            label="Start date of the course :"
            variant="outlined"
            type="date"
            value={s_date_course}
            onChange={(e) => {
              sets_date_course(e.target.value);
            }}
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
          <TextField
            label="End date of the course :"
            variant="outlined"
            type="date"
            value={e_date_course}
            onChange={(e) => {
              sete_date_course(e.target.value);
            }}
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
        </Box>
        <div className="radiobutton">
          <div className="radiobutton_sub">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Have you completed the online assignment submission? :
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={c_o_a_submission}
                onChange={(e) => {
                  setc_o_a_submission(e.target.value);
                }}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="radiobutton_sub">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Do you require a TVEC Certificate? :
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={tvec_certificate}
                onChange={(e) => {
                  settvec_certificate(e.target.value);
                }}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="radiobutton_sub">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                How do you know about CADD Center? :
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={k_a_cadd_center}
                onChange={(e) => {
                  setk_a_cadd_center(e.target.value);
                }}
              >
                <FormControlLabel value="Web" control={<Radio />} label="Web" />
                <FormControlLabel
                  value="Facebook"
                  control={<Radio />}
                  label="Facebook"
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="radiobutton_sub">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Do you recommended CADD Center for others? :
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={r_cadd_center}
                onChange={(e) => {
                  setr_cadd_center(e.target.value);
                }}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="radiobutton_sub">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                How would you rate the entire learning experience at CADD Center
                Lanka on a scale of 1 to 5?
              </FormLabel>
              <FormLabel id="demo-radio-buttons-group-label">
                (1-Not Satisfactory, 2-Below Average, 3-Good, 4-Above Average,
                5-Extremely Satisfied) :
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={r_l_experience}
                onChange={(e) => {
                  setr_l_experience(e.target.value);
                }}
              >
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="radiobutton_sub">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                How would you rate the Lecturer's training proficiency on a
                scale of 1 to 5?
              </FormLabel>
              <FormLabel id="demo-radio-buttons-group-label">
                (1-Not Satisfactory, 2-Below Average, 3-Good, 4-Above Average,
                5-Extremely Satisfied) :
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={l_t_proficiency}
                onChange={(e) => {
                  setl_t_proficiency(e.target.value);
                }}
              >
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="radiobutton_sub">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                How would you rate the student coordination on a scale of 1 to
                5?
              </FormLabel>
              <FormLabel id="demo-radio-buttons-group-label">
                (1-Not Satisfactory, 2-Below Average, 3-Good, 4-Above Average,
                5-Extremely Satisfied) :
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={s_coordination}
                onChange={(e) => {
                  sets_coordination(e.target.value);
                }}
              >
                <FormControlLabel value="1" control={<Radio />} label="1" />
                <FormControlLabel value="2" control={<Radio />} label="2" />
                <FormControlLabel value="3" control={<Radio />} label="3" />
                <FormControlLabel value="4" control={<Radio />} label="4" />
                <FormControlLabel value="5" control={<Radio />} label="5" />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="radiobutton_sub">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Have you completed the course fee payment? :
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={c_fee_payment}
                onChange={(e) => {
                  setc_fee_payment(e.target.value);
                }}
              >
                <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="No" control={<Radio />} label="No" />
              </RadioGroup>
            </FormControl>
          </div>
          <div className="radiobutton_sub">
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">
                Name of the contact person? :
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                value={c_person}
                onChange={(e) => {
                  setc_person(e.target.value);
                }}
              >
                <FormControlLabel
                  value="Ms. Shyama"
                  control={<Radio />}
                  label="Ms. Shyama"
                />
                <FormControlLabel
                  value="Mr. Pasindu"
                  control={<Radio />}
                  label="Mr. Pasindu"
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <Box
          sx={{
            width: 966,
            maxWidth: "100%",
          }}
        >
          <div className="textfeild_sub">
            <TextField
              fullWidth
              label="Feekback/Suggestion :"
              variant="outlined"
              value={feedbak}
              onChange={(e) => {
                setfeedbak(e.target.value);
              }}
              required
            />
          </div>
          <div className="textfeild_sub">
            <TextField
              fullWidth
              label="Upload bank slip :"
              variant="outlined"
              type="file"
              value={bank_slip}
              onChange={(e) => {
                setbank_slip(e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </div>
        </Box>
        <Stack spacing={2} direction="row">
          <Button type="submit" variant="contained" onClick={submithandler}>
            Submit
          </Button>
        </Stack>
      </div>
      <Snackbar
        open={w_ms_email_id}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Enter the your MS Teams EmailID
        </Alert>
      </Snackbar>
      <Snackbar
        open={w_a_submission_d}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Enter the your Assignment submission date
        </Alert>
      </Snackbar>
      <Snackbar
        open={w_name}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Enter the your Name (as in NIC/Passport) for entering on cetificate
        </Alert>
      </Snackbar>
      <Snackbar
        open={w_email}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Enter the your email address
        </Alert>
      </Snackbar>
      <Snackbar
        open={w_p_number}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Enter the your correct phone number
        </Alert>
      </Snackbar>
      <Snackbar
        open={w_nic}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Enter the your correct NIC number
        </Alert>
      </Snackbar>
      <Snackbar
        open={w_organization}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Enter the your Organization/School/Institution/University
        </Alert>
      </Snackbar>
      <Snackbar
        open={w_occupation}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Select the your Occupation
        </Alert>
      </Snackbar>
      <Snackbar
        open={w_name_c_attended}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Enter the your name of the course attended
        </Alert>
      </Snackbar>
      <Snackbar
        open={w_name_lecturer}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Enter the your name of the lecturer
        </Alert>
      </Snackbar>
      <Snackbar
        open={w_s_date_course}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Enter the your start date of the course
        </Alert>
      </Snackbar>
      <Snackbar
        open={w_e_date_course}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Enter the your end date of the course
        </Alert>
      </Snackbar>
      <Snackbar
        open={w_c_o_a_submission}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Select the your completed the online assignment submission
        </Alert>
      </Snackbar>
      <Snackbar
        open={w_tvec_certificate}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Select the do you require a TVEC Certificate
        </Alert>
      </Snackbar>
      <Snackbar
        open={w_k_a_cadd_center}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Select the how do you know about CADD Center
        </Alert>
      </Snackbar>
      <Snackbar
        open={w_r_cadd_center}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Select the Do you recommended CADD Center for others
        </Alert>
      </Snackbar>
      <Snackbar
        open={w_r_l_experience}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Select the rate the entire learning experience at CADD Center
        </Alert>
      </Snackbar>
      <Snackbar
        open={w_l_t_proficiency}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Select the rate the lecturer's training proficiency
        </Alert>
      </Snackbar>
      <Snackbar
        open={w_s_coordination}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Select the rate the student coordination
        </Alert>
      </Snackbar>
      <Snackbar
        open={w_c_fee_payment}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Select the completed the course fee payment
        </Alert>
      </Snackbar>
      <Snackbar
        open={w_c_person}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Select the name of the contact person
        </Alert>
      </Snackbar>
      <Snackbar
        open={w_feedbak}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Enter the Feekback/Suggestion
        </Alert>
      </Snackbar>
    </div>
  );
}
