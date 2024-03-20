import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Usacoguide = () => {
  return (
    <Card>
      <CardMedia
        sx={{ height: { xs: 100, md: 200 } }}
        component={"image"}
        title="Usacoguide
        "
        image="data:image/png;base64,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"
        alt="Usacoguide
        "
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          Usacoguide for CP
        </Typography>
        <Typography variant="body2" color="text.secondary">
          A free collection of curated, high-quality competitive programming
          resources to take you from Codeforces
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button color="text" size="small">
          <a target="_blank" href="https://usaco.guide/">
            Open
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};
export default Usacoguide;
