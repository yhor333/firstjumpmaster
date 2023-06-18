import { FC } from "react";

import { IAdvantages } from "../../constants/advantages";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Advantage: FC<IAdvantages> = ({ icon, title, content }) => {
  return (
    <Box
      color={"primary.dark"}
      sx={{ flex: { md: "1 0 21%", sm: "1 0 45%" }, p: 2, width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "center", color: "#c9831a" }}>
        {icon.type.render()}
      </Box>
      <Typography textAlign={"center"} component={"h3"} variant={"h4"}>
        {title}
      </Typography>
      <Typography textAlign={"center"} component={"p"}>
        {content}
      </Typography>
    </Box>
  );
};

export default Advantage;
