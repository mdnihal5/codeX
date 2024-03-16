import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Js = () => {
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
        sx={{ margin: "20px", height: { xs: 90, md: 140 }, objectFit: "cover" }}
        image="/src/assets/CP Images/jsss.png"
        title="JavaScript"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Js
        </Typography>
        <Typography
          sx={{ display: { xs: "none", md: "flex" } }}
          variant="body2"
          color="text.secondary"
        >
          JavaScript: A programming language that enables interactive and
          dynamic behavior on websites.
        </Typography>
      </CardContent>
      <CardActions
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Button color="text" size="small">
          <a
            target="_blank"
            href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiJ59Huz9qEAxVOU2wGHejRCDcQtwJ6BAgPEAI&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DVlPiVmYuoqw&usg=AOvVaw1QGF-rq-uxDW0GC6NmRRxR&opi=89978449"
          >
            Open
          </a>
        </Button>
      </CardActions>
    </Card>
  );
};
export default Js;
