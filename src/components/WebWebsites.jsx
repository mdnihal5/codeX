import Html from "./web cards/Html";
import Css from "./web cards/Css";
import Js from "./web cards/Js";
import Nodejs from "./web cards/Nodejs";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function WebWebsites() {
  return (
    <>
      <Typography variant="h5" backgroundColor="dark" margin={5}>
        <Button color="Heading" variant="contained">
          Web Devlopment
        </Button>
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container gap={5}>
          <Grid itemScope>
            <Item>
              <Html />
            </Item>
          </Grid>
          <Grid item>
            <Item>
              <Css />
            </Item>
          </Grid>
          <Grid item>
            <Item>
              <Js />
            </Item>
          </Grid>
          <Grid item>
            <Item>
              <Nodejs />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default WebWebsites;
