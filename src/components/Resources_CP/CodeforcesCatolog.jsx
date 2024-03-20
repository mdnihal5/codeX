import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CodeforcesCatolog = () => {
  return (
    <Card>
      <CardMedia
        sx={{ height: { xs: 100, md: 200 } }}
        component={"image"}
        title="CodeforcesCatolog
        "
        image="https://codeforces.com/predownloaded/cb/20/cb2030e1ffe36060519c240682ce83653c1c1cd9.png"
        alt="CodeforcesCatolog
        "
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold" }}
        >
          CodeforcesCatolog for CP
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
          <a target="_blank" href="https://codeforces.com/catalog">
            Open
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};
export default CodeforcesCatolog;
