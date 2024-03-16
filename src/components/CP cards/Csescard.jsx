import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Csescard = () => {
  return (
    <Card
      sx={{
        maxWidth: { xs: 200, md: 270 },
        maxHeight: { xs: 250, md: 350 },
        minWidth: { xs: 200, md: 270 },
        minHeight: { xs: 200, md: 340 },
      }}
    >
      <CardMedia
        sx={{ height: { xs: 100, md: 140 } }}
        image="/src/assets/CP Images/cses.jpeg"
        title="cses"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          CSES
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          CSES: Book teaching algorithms, data structures, and problem-solving
          in Python, with a problem set and solutions.
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button color="text" size="small">
          <a target="_blank" href="https://cses.fi/">
            Open
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};
export default Csescard;
