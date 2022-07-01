import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../CSS/Requsetpage.css";

export default function RequestForm() {
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
          <TextField label="MS Teams EmailID :" variant="outlined" required />
          <TextField
            label="Assignment submission date :"
            variant="outlined"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
          <TextField
            label="Name (as in NIC/Passport) for entering on cetificate :"
            variant="outlined"
            required
          />
          <TextField
            label="Email Address :"
            variant="outlined"
            type="email"
            required
          />
          <TextField
            label="Phone Number :"
            variant="outlined"
            type="number"
            required
          />
          <TextField label="NIC :" variant="outlined" type="email" required />
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
              defaultValue="female"
              name="radio-buttons-group"
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
          />
          <TextField
            label="Name of Certificate applying for? (Leave blank if unknown) :"
            variant="outlined"
          />
          <TextField
            label="Name of the Course Attended :"
            variant="outlined"
            required
          />
          <TextField
            label="Name of the Lecturer :"
            variant="outlined"
            required
          />
          <TextField
            label="Start date of the course :"
            variant="outlined"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
          <TextField
            label="End date of the course :"
            variant="outlined"
            type="date"
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
              required
            />
          </div>
          <div className="textfeild_sub">
            <TextField
              fullWidth
              label="Upload bank slip :"
              variant="outlined"
              type="file"
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </div>
        </Box>
        <Stack spacing={2} direction="row">
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </div>
    </div>
  );
}
