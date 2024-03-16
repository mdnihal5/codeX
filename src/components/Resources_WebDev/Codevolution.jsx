import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Codevolution = () => {
  return (
    <Card>
      <CardMedia
        sx={{ height: { xs: 100, md: 200 } }}
        component={"image"}
        image="/src/assets/ResourceImages/code-evalution.jpeg"
        title="codevolution"
        alt="Codevolution"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold", color: "brown" }}
        >
          Codevolution
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Tutorials on the latest tech in web development! ...more ...more
          learn.codevolution.devand 2 more links. Subscribe. Home. Videos.
          Shorts. Playlists.
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button color="text" size="small">
          <a
            target="_blank"
            href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjI0c3lveGEAxVoxjgGHVT-AnkQFnoECA8QAQ&url=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUC80PWRj_ZU8Zu0HSMNVwKWw&usg=AOvVaw2eAdcebJPNnwJWQd6Z_zYl&opi=89978449"
          >
            Open
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};
export default Codevolution;
