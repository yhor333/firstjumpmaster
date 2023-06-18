import { FC } from "react";

import Container from "@mui/material/Container";

import MainComment from "./main-comment/main-comment";

import { comments } from "../constants/comments";
import { Box, Grid, Typography } from "@mui/material";

const MainComments: FC = () => {
  return (
    <Box sx={{ backgroundColor: "secondary.light" }}>
      <Container id={"comments"} sx={{ py: 10 }}>
        <Typography component={"h4"} sx={{ fontSize: 45, mb: 3 }}>
          Коментарии
        </Typography>
        <Grid container>
          {comments.map((item, index) => (
            <MainComment {...item} key={`${item.name} ${index}`} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MainComments;
