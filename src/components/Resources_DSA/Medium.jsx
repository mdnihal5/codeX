import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Medium = () => {
  return (
    <Card>
      <CardMedia
        sx={{ height: { xs: 100, md: 200 } }}
        component={"image"}
        title="Medium"
        image="/src/assets/ResourceImages/Screenshot 2024-03-07 at 11-32-58 📚🏆 Top 20 Web Development Learning Resources From Beginner to Advanced.png"
        alt="Medium"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          Medium Article for DSA Resource
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Hey everyone, I will be joining Amazon as Software Development
          Engineering Intern for 6 months from February 2021. In this article, I
          have shared all the important resources which I followed to make a
          good command on Data Structures and Algorithms.
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button color="text" size="small">
          <a
            target="_blank"
            href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjX_JOEr9qEAxWk4DgGHfWGBzsQFnoECBQQAQ&url=https%3A%2F%2Fanubhavsinha98.medium.com%2Fresources-to-master-data-structures-and-algorithms-24450dc6d52b&usg=AOvVaw1Ixmc2I7jf2uu1aYO0MgY0&opi=89978449"
          >
            Open
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};
export default Medium;
