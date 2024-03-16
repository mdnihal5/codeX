import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Hackerrank = () => {
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
        sx={{
          margin: "20px",
          height: { xs: 100, md: 140 },
          width: { xs: "60%", md: "80%" },
        }}
        image="/src/assets/CP Images/hacker.png"
        title="HackerRank"
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          HackerRank
        </Typography>
        <Typography
          sx={{ display: { xs: "none", md: "flex" } }}
          variant="body2"
          color="text.secondary"
        >
          HackerRank: Online platform for practicing coding skills, competing in
          challenges.
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button color="text" size="small">
          <a target="_blank" href="https://www.hackerrank.com/">
            Open
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};
export default Hackerrank;
