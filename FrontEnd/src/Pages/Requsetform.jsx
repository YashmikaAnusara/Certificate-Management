import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Typography from "@mui/material/Typography";
import Port from "../port";
import axios from "axios";
import ShortUniqueId from "short-unique-id";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

import "../CSS/Requsetpage.css";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function getSteps() {
  return ["Personal Details", "Class Details", "Rate Us", "Payment Details"];
}

const PersonalDetails = () => {
  const { control } = useFormContext();
  return (
    <>
      <div className="Form">
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "55ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Controller
            control={control}
            name="ms_email_id"
            render={({ field }) => (
              <TextField
                id="ms_email_id"
                label="MS Teams Email ID :"
                variant="outlined"
                // required
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="a_submission_d"
            render={({ field }) => (
              <TextField
                id="a_submission_d"
                type="date"
                label="Assignment submission date :"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                // required
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="name"
            render={({ field }) => (
              <TextField
                id="name"
                label="Name (as in NIC/Passport) for entering on cetificate :"
                variant="outlined"
                // required
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextField
                id="email"
                type="email"
                label="Email Address :"
                variant="outlined"
                // required
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="p_number"
            render={({ field }) => (
              <TextField
                id="p_number"
                type="number"
                label="Phone Number :"
                variant="outlined"
                // required
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="nic"
            render={({ field }) => (
              <TextField
                id="nic"
                label="NIC :"
                variant="outlined"
                // required
                {...field}
              />
            )}
          />
        </Box>
        <Box
          sx={{
            "& > :not(style)": { m: 1, maxWidth: "98.5%", minWidth: "55ch" },
          }}
        >
          <Controller
            control={control}
            name="organization"
            render={({ field }) => (
              <TextField
                id="organization"
                label="Organization/School/Institution/University :"
                variant="outlined"
                // required
                fullWidth
                {...field}
              />
            )}
          />
        </Box>
        <div className="radiobutton">
          <Controller
            control={control}
            name="occupation"
            render={({ field }) => (
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Occupation :
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  {...field}
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
            )}
          />
        </div>
      </div>
    </>
  );
};
const ClassDetails = () => {
  const { control } = useFormContext();
  return (
    <>
      <div className="Form">
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "55ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Controller
            control={control}
            name="class_id"
            render={({ field }) => (
              <TextField
                id="class_id"
                label="Class ID :"
                variant="outlined"
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="name_cerificate"
            render={({ field }) => (
              <TextField
                id="name_cerificate"
                label="Name of Certificate applying for? :"
                variant="outlined"
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="name_c_attended"
            render={({ field }) => (
              <TextField
                id="name_c_attended"
                label="Name of the Course Attended :"
                variant="outlined"
                // required
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="name_lecturer"
            render={({ field }) => (
              <TextField
                id="name_lecturer"
                label="Name of the Lecturer :"
                variant="outlined"
                // required
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="s_date_course"
            render={({ field }) => (
              <TextField
                id="s_date_course"
                type="date"
                label="Start date of the course :"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                // required
                {...field}
              />
            )}
          />

          <Controller
            control={control}
            name="e_date_course"
            render={({ field }) => (
              <TextField
                id="e_date_course"
                type="date"
                label="End date of the course :"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
                // required
                {...field}
              />
            )}
          />
        </Box>
      </div>
    </>
  );
};
const RatetheCADDCenter = () => {
  const { control } = useFormContext();
  return (
    <>
      <div className="Form">
        <div className="radiobutton">
          <div className="radiobutton_sub">
            <Controller
              control={control}
              name="c_o_a_submission"
              render={({ field }) => (
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Have you completed the online assignment submission? :
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    {...field}
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              )}
            />
          </div>
          <div className="radiobutton_sub">
            <Controller
              control={control}
              name="tvec_certificate"
              render={({ field }) => (
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Do you require a TVEC Certificate? :
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    {...field}
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              )}
            />
          </div>
          <div className="radiobutton_sub">
            <Controller
              control={control}
              name="k_a_cadd_center"
              render={({ field }) => (
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    How do you know about CADD Center? :
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    {...field}
                  >
                    <FormControlLabel
                      value="Web"
                      control={<Radio />}
                      label="Web"
                    />
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
              )}
            />
          </div>
          <div className="radiobutton_sub">
            <Controller
              control={control}
              name="r_cadd_center"
              render={({ field }) => (
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Do you recommended CADD Center for others? :
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    {...field}
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              )}
            />
          </div>
          <div className="radiobutton_sub">
            <Controller
              control={control}
              name="r_l_experience"
              render={({ field }) => (
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    How would you rate the entire learning experience at CADD
                    Center Lanka on a scale of 1 to 5?
                  </FormLabel>
                  <FormLabel id="demo-radio-buttons-group-label">
                    (1-Not Satisfactory, 2-Below Average, 3-Good, 4-Above
                    Average, 5-Extremely Satisfied) :
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    {...field}
                  >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <FormControlLabel value="4" control={<Radio />} label="4" />
                    <FormControlLabel value="5" control={<Radio />} label="5" />
                  </RadioGroup>
                </FormControl>
              )}
            />
          </div>
          <div className="radiobutton_sub">
            <Controller
              control={control}
              name="l_t_proficiency"
              render={({ field }) => (
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    How would you rate the Lecturer's training proficiency on a
                    scale of 1 to 5?
                  </FormLabel>
                  <FormLabel id="demo-radio-buttons-group-label">
                    (1-Not Satisfactory, 2-Below Average, 3-Good, 4-Above
                    Average, 5-Extremely Satisfied) :
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    {...field}
                  >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <FormControlLabel value="4" control={<Radio />} label="4" />
                    <FormControlLabel value="5" control={<Radio />} label="5" />
                  </RadioGroup>
                </FormControl>
              )}
            />
          </div>
          <div className="radiobutton_sub">
            <Controller
              control={control}
              name="s_coordination"
              render={({ field }) => (
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    How would you rate the student coordination on a scale of 1
                    to 5?
                  </FormLabel>
                  <FormLabel id="demo-radio-buttons-group-label">
                    (1-Not Satisfactory, 2-Below Average, 3-Good, 4-Above
                    Average, 5-Extremely Satisfied) :
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    {...field}
                  >
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <FormControlLabel value="4" control={<Radio />} label="4" />
                    <FormControlLabel value="5" control={<Radio />} label="5" />
                  </RadioGroup>
                </FormControl>
              )}
            />
          </div>
          <div className="radiobutton_sub">
            <Controller
              control={control}
              name="c_fee_payment"
              render={({ field }) => (
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Have you completed the course fee payment? :
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    {...field}
                  >
                    <FormControlLabel
                      value="Yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      value="No"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              )}
            />
          </div>
          <div className="radiobutton_sub">
            <Controller
              control={control}
              name="b_inquired"
              render={({ field }) => (
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Name of the branch inquired at? :
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    {...field}
                  >
                    <FormControlLabel
                      value="Malabe"
                      control={<Radio />}
                      label="Malabe"
                    />
                    <FormControlLabel
                      value="Jaffna"
                      control={<Radio />}
                      label="Jaffna"
                    />
                    <FormControlLabel
                      value="Kandy"
                      control={<Radio />}
                      label="Kandy"
                    />
                    <FormControlLabel
                      value="Kurunegala"
                      control={<Radio />}
                      label="Kurunegala"
                    />
                    <FormControlLabel
                      value="Other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                </FormControl>
              )}
            />
          </div>
          <div className="radiobutton_sub">
            <Controller
              control={control}
              name="c_person"
              render={({ field }) => (
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Name of the contact person? :
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    {...field}
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
              )}
            />
          </div>
          <Controller
            control={control}
            name="feedbak"
            render={({ field }) => (
              <div className="textfeild_sub">
                <TextField
                  id="feedbak"
                  label="Feedback/Suggestion :"
                  variant="outlined"
                  fullWidth
                  // required
                  {...field}
                />
              </div>
            )}
          />
        </div>
      </div>
    </>
  );
};
const FeedbackPaymentDetails = () => {
  const { control } = useFormContext();

  return (
    <>
      <div className="Form">
        <Box
          sx={{
            "& > :not(style)": { m: 1, maxWidth: "98.5%", minWidth: "55ch" },
          }}
        >
          <Controller
            control={control}
            name="bank_slip"
            render={({ field }) => (
              <div className="textfeild_sub">
                <TextField
                  id="bank_slip"
                  type="file"
                  accept=".jpg, .jpeg"
                  label="Upload bank slip :"
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => {
                    field.onChange(e.target.files[0]);
                  }}
                  fullWidth
                  required
                />
              </div>
            )}
          />
        </Box>
      </div>
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalDetails />;
    case 1:
      return <ClassDetails />;
    case 2:
      return <RatetheCADDCenter />;
    case 3:
      return <FeedbackPaymentDetails />;
    default:
      return "unknown step";
  }
}

export default function RequsetForm() {
  const currentdate = new Date();
  const requestmonth = new Date();

  var newdate =
    currentdate.getFullYear() +
    "-" +
    (currentdate.getMonth() + 1) +
    "-" +
    currentdate.getDate();

  const month = requestmonth.getMonth();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const uuid = new ShortUniqueId({ length: 7 });

  const [newUUID] = useState(uuid());

  const methods = useForm({
    defaultValues: {
      uuid: newUUID,
      ms_email_id: "",
      a_submission_d: "",
      name: "",
      email: "",
      p_number: "",
      nic: "",
      organization: "",
      occupation: "",
      class_id: "",
      name_cerificate: "",
      name_c_attended: "",
      name_lecturer: "",
      s_date_course: "",
      e_date_course: "",
      c_o_a_submission: "",
      tvec_certificate: "",
      k_a_cadd_center: "",
      r_cadd_center: "",
      r_l_experience: "",
      l_t_proficiency: "",
      s_coordination: "",
      c_fee_payment: "",
      b_inquired: "",
      c_person: "",
      feedbak: "",
      bank_slip: "",
      s_date: newdate,
      s_month: months[month],
    },
  });
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
  const [w_b_inquired, setw_b_inquired] = useState(false);
  const [w_c_person, setw_c_person] = useState(false);
  const [w_feedbak, setw_feedbak] = useState(false);
  const [w_bank_slip, setw_bank_slip] = useState(false);

  const [s_datasend, sets_datasend] = useState(false);

  const vertical = "top";
  const horizontal = "right";

  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps] = useState([]);
  const steps = getSteps();

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    // console.log(data);

    // const values = (data) => {

    //   data.ms_email_id,
    //     data.a_submission_d,
    //     data.name,
    //     data.email,
    //     data.p_number,
    //     data.nic,
    //     data.organization,
    //     data.occupation,
    //     data.class_id,
    //     data.name_cerificate,
    //     data.name_c_attended,
    //     data.name_lecturer,
    //     data.s_date_course,
    //     data.e_date_course,
    //     data.c_o_a_submission,
    //     data.tvec_certificate,
    //     data.k_a_cadd_center,
    //     data.r_cadd_center,
    //     data.r_l_experience,
    //     data.l_t_proficiency,
    //     data.s_coordination,
    //     data.c_fee_payment,
    //     data.c_person,
    //     data.feedbak,
    //     data.bank_slip,
    // }

    if (activeStep === 0) {
      if (data.ms_email_id === "") {
        setw_ms_email_id(true);
        setActiveStep(activeStep);
      } else if (data.a_submission_d === "") {
        setw_a_submission_d(true);
        setActiveStep(activeStep);
      } else if (data.name === "") {
        setw_name(true);
        setActiveStep(activeStep);
      } else if (data.email === "") {
        setw_email(true);
        setActiveStep(activeStep);
      } else if (data.p_number.length !== 10) {
        setw_p_number(true);
        setActiveStep(activeStep);
      } else if (!(data.nic.length === 10 || data.nic.length === 12)) {
        setw_nic(true);
        setActiveStep(activeStep);
      } else if (data.organization === "") {
        setw_organization(true);
        setActiveStep(activeStep);
      } else if (data.occupation === "") {
        setw_occupation(true);
        setActiveStep(activeStep);
      } else {
        setActiveStep(activeStep + 1);
      }
    } else if (activeStep === 1) {
      if (data.name_c_attended === "") {
        setw_name_c_attended(true);
        setActiveStep(activeStep);
      } else if (data.name_lecturer === "") {
        setw_name_lecturer(true);
        setActiveStep(activeStep);
      } else if (data.s_date_course === "") {
        setw_s_date_course(true);
        setActiveStep(activeStep);
      } else if (data.e_date_course === "") {
        setw_e_date_course(true);
        setActiveStep(activeStep);
      } else {
        setActiveStep(activeStep + 1);
      }
    } else if (activeStep === 2) {
      if (data.c_o_a_submission === "") {
        setw_c_o_a_submission(true);
        setActiveStep(activeStep);
      } else if (data.tvec_certificate === "") {
        setw_tvec_certificate(true);
        setActiveStep(activeStep);
      } else if (data.k_a_cadd_center === "") {
        setw_k_a_cadd_center(true);
        setActiveStep(activeStep);
      } else if (data.r_cadd_center === "") {
        setw_r_cadd_center(true);
        setActiveStep(activeStep);
      } else if (data.r_l_experience === "") {
        setw_r_l_experience(true);
        setActiveStep(activeStep);
      } else if (data.l_t_proficiency === "") {
        setw_l_t_proficiency(true);
        setActiveStep(activeStep);
      } else if (data.s_coordination === "") {
        setw_s_coordination(true);
        setActiveStep(activeStep);
      } else if (data.c_fee_payment === "") {
        setw_c_fee_payment(true);
        setActiveStep(activeStep);
      } else if (data.b_inquired === "") {
        setw_b_inquired(true);
        setActiveStep(activeStep);
      } else if (data.c_person === "") {
        setw_c_person(true);
        setActiveStep(activeStep);
      } else if (data.feedbak === "") {
        setw_feedbak(true);
        setActiveStep(activeStep);
      } else {
        setActiveStep(activeStep + 1);
      }
    } else if (activeStep === 3) {
      if (data.bank_slip === "") {
        setw_bank_slip(true);
        setActiveStep(activeStep);
      } else {
        setActiveStep(activeStep + 1);
      }
    }
    if (activeStep === steps.length - 1) {
      // const test = data.bank_slip.name.replace(data.bank_slip.name, "testing.jpg");
      // console.log(test);
      console.log(steps.length);
      const data2 = new FormData();
      data2.append("slip", data.bank_slip);

      axios.post(`http://${Port}:8070/student/requset`, data).then((res) => {
        axios
          .post(`http://${Port}:8070/upload/slip/${newUUID}`, data2)
          .then((res) => {
            setActiveStep(activeStep + 1);
            sets_datasend(true);
            setTimeout(() => {
              window.location.reload();
            }, 900);
          });
      });
    }
    // else {
    //   setActiveStep(activeStep + 1);
    //   setSkippedSteps(
    //     skippedSteps.filter((skipItem) => skipItem !=== activeStep)
    //   );
    // }
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
    setw_b_inquired(false);
    setw_c_person(false);
    setw_feedbak(false);
    setw_bank_slip(false);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div className="FromeBody">
      <div className="FromeCon">
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((step, index) => {
            const labelProps = {};
            const stepProps = {};
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step {...stepProps} key={index}>
                <StepLabel {...labelProps}>{step}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {activeStep === steps.length ? (
          <Typography variant="h3" align="center" marginTop={10}>
            Thank You
          </Typography>
        ) : (
          <>
            <FormProvider {...methods}>
              <form onSubmit={methods.handleSubmit(handleNext)}>
                {getStepContent(activeStep)}

                <Button disabled={activeStep === 0} onClick={handleBack}>
                  back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  // onClick={handleNext}
                  type="submit"
                >
                  {activeStep === steps.length - 1 ? "Submit" : "Next"}
                </Button>
              </form>
            </FormProvider>
          </>
        )}
      </div>
      <Snackbar
        open={w_ms_email_id}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Enter the your MS Teams Email ID
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
        open={w_b_inquired}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Select the branch
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
      <Snackbar
        open={w_bank_slip}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="warning" sx={{ width: "100%" }}>
          Insert the Bank Slip
        </Alert>
      </Snackbar>
      <Snackbar
        open={s_datasend}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Data Sent Successfully
        </Alert>
      </Snackbar>
    </div>
  );
}
