import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CodingNinjas = () => {
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
        sx={{
          height: { xs: 100, md: 140 },
          marginX: "18%",
          width: { xs: "60%", md: "80%" },
        }}
        component={"image"}
        image="/src/assets/CP Images/codingNinjas.jpeg"
        title="codingNinjas"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          CodingNinjas
        </Typography>
        <Typography
          sx={{ display: { xs: "none", md: "flex" } }}
          variant="body2"
          color="text.secondary"
        >
          Coding Ninjas: Online platform for coding courses, challenges, and
          competitions.
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button color="text" size="small">
          <a target="_blank" href="https:/codingninjas.com/">
            Open
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};
export default CodingNinjas;
