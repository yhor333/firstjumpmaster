import { FC } from "react";

import { IPlan } from "../../constants/plans";

import { Box, Grid, Typography } from "@mui/material";

const MainPlanItem: FC<IPlan> = ({ title, description }) => {
  return (
    <Grid item lg={4} md={6}>
      <Box
        sx={{
          border: "1px solid #fff",
          height: { lg: 400, md: 340, sm: 280, xs: 480 },
          borderRadius: "10px",
          px: 2,
          pt: 2,
          backgroundColor: "secondary.main",
          color: "primary.light",
        }}>
        <Typography
          sx={{
            fontWeight: 600,
            color: "primary.dark",
            fontSize: 18,
            mb: 2,
            height: { md: 76, xs: 100 },
          }}
          component={"h4"}>
          {title}
        </Typography>
        <Typography component={"p"}>{description}</Typography>
      </Box>
    </Grid>
  );
};

export default MainPlanItem;
