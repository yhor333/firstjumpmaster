import { FC } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";

const MainForm: FC = () => {
  return (
    <Box sx={{ backgroundImage: "../../../../assets/img/main-bg.jpg" }}>
      <Box>
        <Typography component={"p"} variant="h1">
          Кибербезопасность для всех
        </Typography>
      </Box>
      <Box>
        <FormControl>
          <TextField
            id="standard-disabled"
            defaultValue="Имя"
            variant="standard"
          />
          <TextField
            id="standard-disabled"
            defaultValue="Email"
            variant="standard"
          />
          <FormGroup>
            <FormControlLabel
              required
              control={<Checkbox />}
              label="Пожалуйста, примите наши Политика конфиденциальности!"
            />
            <FormControlLabel
              required
              control={<Checkbox />}
              label="Required"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MainForm;
