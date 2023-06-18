import { FC } from "react";

import Box from "@mui/material/Box";

import { advantages } from "../constants/advantages";
import Advantage from "./advantage/advantage";

const MainAdvantages: FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        backgroundColor: "secondary.light",
      }}>
      <Box
        sx={{
          border: "1px solid #c9831a",
          borderRadius: "10px",
          margin: 4,
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}>
        {advantages.map((item, index) => (
          <Advantage {...item} key={`${item.title} ${index}`} />
        ))}
      </Box>
    </Box>
  );
};

export default MainAdvantages;
