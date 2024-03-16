import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const WMedium = () => {
  return (
    <Card>
      <CardMedia
        sx={{ height: { xs: 100, md: 200 }, objectFit: "cover" }}
        component={"image"}
        image="/src/assets/ResourceImages/Screenshot 2024-03-07 at 11-32-58 📚🏆 Top 20 Web Development Learning Resources From Beginner to Advanced.png"
        title="take u forward"
        alt="take u forward"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          color={"red"}
          sx={{ fontWeight: "bold" }}
        >
          📚🏆 Top 20 Web Development Learning Resources: From Beginner to
          Advanced
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Web development refers to the act of building and maintaining
          websites; these websites can range in complexity from simple static
          websites to more complex web applications with huge databases,
          real-time data-intensive applications such as social media and
          eCommerce applications.
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button color="text" size="small">
          <a
            target="_blank"
            href="https://dev.to/alexomeyer/top-20-web-development-learning-resources-from-beginner-to-advanced-4h8a"
          >
            Open
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};
export default WMedium;
