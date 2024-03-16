import CodingNinjas from "./DSA cards/GeeksforGeeks";
import GeeksforGeeks from "./DSA cards/CodingNinjas";
import Leetcode from "./DSA cards/Leetcode";
import Hackerrank from "./DSA cards/Hackerrank";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import styled from "@emotion/styled";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function DSAwebsites() {
  return (
    <>
      <Typography variant="h5" backgroundColor="dark" margin={5}>
        <Button color="Heading" variant="contained">
          DSA
        </Button>
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container gap={5}>
          <Grid itemScope>
            <Item>
              <Leetcode />{" "}
            </Item>
          </Grid>
          <Grid item>
            <Item>
              <GeeksforGeeks />
            </Item>
          </Grid>
          <Grid item>
            <Item>
              <CodingNinjas />
            </Item>
          </Grid>
          <Grid item>
            <Item>
              <Hackerrank />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default DSAwebsites;
