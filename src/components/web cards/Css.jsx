import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Css = () => {
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
        image="/src/assets/CP Images/css.png"
        title="Css"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Css
        </Typography>
        <Typography
          sx={{ display: { xs: "none", md: "flex" } }}
          variant="body2"
          color="text.secondary"
        >
          CSS (Cascading Style Sheets): A language used to style the appearance
          of web pages, enhancing their visual presentation and layout.
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button color="text" size="small">
          <a
            target="_blank"
            href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwii8OPCz9qEAxUETGwGHTwzCBQQwqsBegQICRAF&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DOXGznpKZ_sA&usg=AOvVaw1Cc4NXK3bpOBZl0HWEw5VZ&opi=89978449"
          >
            Open
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};
export default Css;
