import { FC } from "react";

import { Box, Container, Typography } from "@mui/material";

import teacher from "../../../../../assets/img/teacher.png";

const MainTeacher: FC = () => {
  return (
    <Box
      id={"teacher"}
      sx={{
        backgroundColor: "secondary.light",
        py: 10,
        color: "primary.dark",
      }}>
      <Container>
        <Typography component={"h4"} sx={{ fontSize: 45, mb: 3 }}>
          Преподаватель
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}>
          <Box sx={{ mr: 2 }}>
            <img
              style={{
                borderRadius: "50%",
                height: "100px",
                width: "100px",
                border: "4px solid #c9831a",
              }}
              alt="teacher"
              src={teacher}></img>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}>
            <Typography component={"h5"}>Jim Sullivan</Typography>
            <Typography component={"h5"}>
              Мастер-тренер и практикующий специалист по технологиям
              <br />
              от партнера LearnQuest
            </Typography>
          </Box>
        </Box>
        <Typography sx={{ mt: 2 }} component={"p"}>
          Специализации: Эксперт: Blockchain, DevOps, Java, .NET, Apache,
          Tomcat, Guacamole, Agile SAFe, а также продукты и инструменты Agile.
          Сильные технические навыки в области ИТ, включая разработку
          программного обеспечения, программирование, администрирование
          инструментов и систем. Сертифицированный Scrum Master и
          сертифицированный Scrum Professional. Сильные деловые навыки,
          связанные с: управлением рисками и возвратом инвестиций, а также с
          метриками
        </Typography>
      </Container>
    </Box>
  );
};

export default MainTeacher;
