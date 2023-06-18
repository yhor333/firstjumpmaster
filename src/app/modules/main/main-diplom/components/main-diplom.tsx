import { FC } from "react";
import { Link } from "react-scroll";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import logoLinked from "../../../../../assets/img/linked-logo.png";
import diplom from "../../../../../assets/img/diplom.png";
import { Grid } from "@mui/material";

const MainDiplom: FC = () => {
  return (
    <Grid
      id={"dimplom"}
      container
      sx={{ p: 10, backgroundColor: "secondary.light" }}>
      <Grid item sm={4}>
        <Typography sx={{ mb: 2 }} component={"h5"}>
          Начните обучение сегодня
        </Typography>
        <Link to={"registration"}>
          <Button
            sx={{
              p: 2,
              mb: 2,
              "&:hover": {
                backgroundColor: "#1068ed",
              },
            }}
            variant="contained">
            Участвовать бесплатно
          </Button>
        </Link>
        <Typography component={"p"}>
          <strong>120 462</strong> уже зарегистрированы
        </Typography>
      </Grid>
      <Grid item sm={4}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Typography sx={{ mr: 1 }} component={"p"}>
            Можно публиковать в
          </Typography>
          <a href="https://www.linkedin.com/">
            <img alt="logo-linkedIn" src={logoLinked}></img>
          </a>
        </Box>
        <Typography component={"p"}>
          Вы можете разместить Сертификаты о прохождении курсов в разделе
          сертификатов в профиле LinkedIn, а также в печатных резюме и других
          документах.
        </Typography>
      </Grid>
      <Grid item sm={4}>
        <Box sx={{ width: "70%", mx: "auto" }}>
          <img
            style={{ maxWidth: "100%" }}
            src={diplom}
            alt="exemple-diplom"></img>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MainDiplom;
