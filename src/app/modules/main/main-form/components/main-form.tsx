import { FC } from "react";
import { Link } from "react-router-dom";

import MainFormAbout from "./main-form-about";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import bg from "../../../../../assets/img/main-bg.png";

const MainForm: FC = () => {
  return (
    <Box
      id={"registration"}
      sx={{
        background: `center / cover no-repeat  url(${bg})`,
        height: "800px",
        display: "flex",
        position: "relative",
      }}>
      <Container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}>
        <MainFormAbout />
        <form style={{ display: "flex", alignItems: "center" }}>
          <FormControl
            sx={{
              color: "primary.dark",
              backgroundColor: "secondary.main",
              borderRadius: "10px",

              py: 4,
              px: 2,
            }}>
            <TextField
              sx={{ minWidth: "100%", mb: 2 }}
              id="standard-disabled"
              label="Имя"
            />
            <TextField
              sx={{ minWidth: "100%", mb: 2 }}
              id="standard-disabled"
              label="Фамилия"
            />
            <TextField
              sx={{ minWidth: "100%" }}
              id="standard-disabled"
              label="Email"
            />
            <FormGroup>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}>
                <FormControlLabel
                  sx={{
                    "& .MuiFormControlLabel-asterisk": {
                      display: "none",
                    },
                  }}
                  label=""
                  required
                  control={<Checkbox />}
                />
                <Typography component={"p"}>
                  Принять{" "}
                  <Link
                    style={{ textDecoration: "none" }}
                    to={"/privacy-policy"}>
                    Политика конфиденциальности !
                  </Link>
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <FormControlLabel
                  sx={{
                    "& .MuiFormControlLabel-asterisk": {
                      display: "none",
                    },
                  }}
                  label=""
                  required
                  control={<Checkbox />}
                />
                <Typography component={"p"}>
                  Принять{" "}
                  <Link
                    style={{ textDecoration: "none" }}
                    to={"/terms-and-conditions"}>
                    Условия и положения
                  </Link>
                </Typography>
              </Box>
              <Button
                variant="contained"
                type="submit"
                sx={{ "&:hover": { backgroundColor: "#1068ed" } }}>
                Отправить
              </Button>
            </FormGroup>
          </FormControl>
        </form>
      </Container>
    </Box>
  );
};

export default MainForm;
