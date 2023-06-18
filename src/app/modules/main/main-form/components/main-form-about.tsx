import { FC } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import smLogo from "../../../../../assets/img/sm-logo.png";

const MainFormAbout: FC = () => {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        maxWidth: "50%",
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}>
        <Box
          sx={{
            position: "absolute",
            top: -50,
            left: 0,
            display: "flex",
            alignItems: "center",
            color: "secondary.main",
          }}>
          <Typography sx={{ mr: 2 }} component={"p"}>
            От партнера
          </Typography>
          <img
            style={{ width: 200, height: 50, objectFit: "contain" }}
            alt="maryland-logo"
            src={smLogo}></img>
        </Box>
        <Box>
          <Typography
            color={"secondary.main"}
            component={"h3"}
            sx={{ fontSize: "30px", fontWeight: "600", mb: 3 }}
            variant="subtitle1">
            Специализация Scrum Master Certification
          </Typography>
          <Typography color={"secondary.main"} sx={{ mb: 2 }} component={"p"}>
            В ходе этой специализации вы узнаете основные концепции и принципы
            Scrum, а также научитесь применять их на практике. Вы изучите роли и
            ответственности Scrum Master'а, основные процессы, такие как
            планирование спринта, дневные стендап-встречи, обзоры спринтов и
            ретроспективы. Также будет обсуждаться важность поддержки и развития
            самой команды.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MainFormAbout;
