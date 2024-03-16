import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Codeforcescard = () => {
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
        image="/src/assets/CP Images/codeforces.png"
        title="codeforces"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Codeforces
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          Codeforces: Online competitive programming platform hosting contests,
          problems, and discussions to improve coding skills.
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button color="text" size="small">
          <a target="_blank" href="https://codeforces.com/">
            Open
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};
export default Codeforcescard;
