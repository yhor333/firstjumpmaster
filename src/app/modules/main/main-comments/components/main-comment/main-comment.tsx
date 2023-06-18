import { FC } from "react";

import { Grid, Typography } from "@mui/material";

import { IComments } from "../../constants/comments";

const MainComment: FC<IComments> = ({ name, date, comment }) => {
  return (
    <Grid
      item
      xs={12}
      sx={{
        boxShadow: "0px 0px 13px 4px rgb(0 0 0 / 30%)",
        p: 2,
        my: 5,
        backgroundColor: "secondary.main",
      }}>
      <Typography component={"h6"}>{name}</Typography>
      <Typography component={"p"}>{date}</Typography>
      <Typography component={"p"} sx={{ color: "primary.light" }}>
        {comment}
      </Typography>
    </Grid>
  );
};

export default MainComment;
