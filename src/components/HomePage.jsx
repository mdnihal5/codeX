// import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";
import Cpwebsites from "./Cpwebsites";
import DSAwebsites from "./DSAWebsites";
import WebWebsites from "./WebWebsites";

const HomePage = () => {
  return (
    <Stack
      direction={"column"}
      width={"100%"}
      padding={"2rem"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box width={"100%"}>
        <Cpwebsites />
        <DSAwebsites />
        <WebWebsites />
      </Box>
    </Stack>
  );
};

export default HomePage;
