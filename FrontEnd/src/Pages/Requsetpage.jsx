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
import axios from "axios"
import "../CSS/Requsetpage.css";

export default function RequestForm() {
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
    axios.post(`http://localhost:8070/student/requset`, data).then((res) => {
      console.log("Data Added");
    });
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
    </div>
  );
}
