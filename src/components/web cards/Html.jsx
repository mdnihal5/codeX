import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Html = () => {
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
        sx={{ margin: "10px", height: { xs: 100, md: 140 }, width: "90%" }}
        image="/src/assets/CP Images/html.png"
        title="Html"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Html
        </Typography>
        <Typography
          sx={{ display: { xs: "none", md: "flex" } }}
          variant="body2"
          color="text.secondary"
        >
          HTML Course: A comprehensive guide to learning and mastering HTML for
          building websites and web applications.
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button color="text" size="small">
          <a target="_blank" href="https://www.youtube.com/watch?v=G3e-cpL7ofc">
            Open
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};
export default Html;
