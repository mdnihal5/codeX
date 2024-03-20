import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Cpalgorithms = () => {
  return (
    <Card>
      <CardMedia
        sx={{ height: { xs: 100, md: 200 } }}
        component={"image"}
        image="https://site-images.similarcdn.com/image?url=cp-algorithms.com&t=4&s=1&h=c88c59b066bd504d828864c8faeef8290042787bc9181dcd4de36c837934d45b"
        title="Cpalgorithms"
        alt="Cpalgorithms"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          Cpalgorithms for CP Resource
        </Typography>
        <Typography variant="body2" color="text.secondary">
          The goal of this project is to translate the wonderful resource
          https://e-maxx.ru/algo which provides descriptions of many algorithms
          and data structures especially popular in field of competitive
          programming. Moreover we want to improve the collected knowledge by
          extending the articles and adding new articles to the collection..
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button color="text" size="small">
          <a target="_blank" href="https://cp-algorithms.com/">
            Open
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};
export default Cpalgorithms;
