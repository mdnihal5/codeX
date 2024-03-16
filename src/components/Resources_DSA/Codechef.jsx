import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Codechef = () => {
  return (
    <Card>
      <CardMedia
        sx={{ height: { xs: 100, md: 200 } }}
        component={"image"}
        image="/src/assets/ResourceImages/Screenshot 2024-03-07 at 10-27-45 Learn Data Structures and Algorithms CodeChef.png"
        title="Codechef"
        alt="Codechef"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold", color: "brown" }}
        >
          Codechef
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This section lists out the syllabus, the learning resources and Mock
          Tests to help you prepare for the data structures and algorithms
          Certification test. The resources that we list here are references
          that we have collected over the internet and some of them from our own
          website. While we do recommend these resources based on the inputs of
          our user community, we do not claim that these are the most
          authoritative Learning Resources about any topic in data structures
          and algorithms. Please feel free to find out what suits best to you.
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button color="text" size="small">
          <a
            target="_blank"
            href="https://www.codechef.com/certification/data-structures-and-algorithms/prepare"
          >
            Open
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};
export default Codechef;
