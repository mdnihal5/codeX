import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const GithubPage = () => {
  return (
    <Card>
      <CardMedia
        sx={{ height: { xs: 100, md: 200 } }}
        component={"image"}
        image="/src/assets/ResourceImages/Screenshot 2024-03-07 at 11-33-44 iamismile_web-dev-resources The complete web development resources you ever need. More than 150 resources for your web development.png"
        title="Github"
        alt="Gith"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          Github Source for WebDev
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a complete web development resource you need to build your
          next project. More than 150+ resources are included here. Feel free to
          explore and use in your projects.
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button color="text" size="small">
          <a
            target="_blank"
            href="https://github.com/iamismile/web-dev-resources"
          >
            Open
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};
export default GithubPage;
