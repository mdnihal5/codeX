import Codeforcescard from "./CP cards/Codeforcescard";
import Codechefcard from "./CP cards/Codechefcard";
import Atcodercard from "./CP cards/Atcodercard";
import Csescard from "./CP cards/Csescard";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function Cpwebsites() {
  return (
    <>
      {" "}
      <Typography variant="h5" backgroundColor="dark" margin={5}>
        <Button color="Heading" variant="contained">
          Competitive Programming
        </Button>
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container gap={5}>
          <Grid itemScope>
            <Item>
              <Codeforcescard />
            </Item>
          </Grid>
          <Grid item>
            <Item>
              <Codechefcard />
            </Item>
          </Grid>
          <Grid item>
            <Item>
              <Atcodercard />
            </Item>
          </Grid>
          <Grid item>
            <Item>
              <Csescard />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Cpwebsites;
