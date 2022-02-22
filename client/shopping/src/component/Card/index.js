import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { red } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Button from "../Button";

export default function RecipeReviewCard({item}) {
  const handleClickAction = (e) => {
    console.log("test", e.target.value);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={item?.name} />
      <CardMedia
        component="img"
        height="194"
        image={item?.imageURL}
        alt={item?.name}
      />
      <CardContent style={{background:"#f0f0f0",margin:'0 12px 20px 12px'}}>
        <Typography variant="body2" color="text.secondary">
          {item?.description}
        </Typography>
      </CardContent>
      <CardActions style={{ position: "relative" }}>
        <label aria-label="price amount">MRP Rs. {item?.price}</label>
        <div style={{position:'absolute', right: '12px', bottom: '8px'}}>
          <Button handleClickHandler={handleClickAction} aria-label="Buy Now">
            Buy Now
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}
