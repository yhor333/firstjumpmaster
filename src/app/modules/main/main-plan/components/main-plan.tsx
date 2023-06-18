import { FC } from "react";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import MainPlanItem from "./main-plan-item/main-plan-item";

import { plans } from "../constants/plans";

const MainPlan: FC = () => {
  return (
    <Box id={"program"} sx={{ backgroundColor: "secondary.light" }}>
      <Container sx={{ py: 10 }}>
        <Typography
          sx={{ color: "primary.dark", fontSize: 45, mb: 8 }}
          component={"h3"}>
          Специализация включает несколько курсов: {plans.length}
        </Typography>
        <Grid container spacing={4}>
          {plans.map((item, index) => (
            <MainPlanItem {...item} key={`${item.title} ${index}`} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MainPlan;
