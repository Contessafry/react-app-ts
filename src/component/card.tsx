import React from "react";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MUiCardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./Card.css";

function Card({ product, onClick }: any) {
  const { title, description, image, id } = product;

  return (
    <div className="card">
      <MUiCardMedia component="img" height="140" image={image} alt={title} />
      <Typography gutterBottom variant="h5">
        {" "}
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>

      <IconButton
        color="primary"
        aria-label="add to shopping cart"
        onClick={() => onClick(id)}
      >
        <AddShoppingCartIcon />
      </IconButton>
    </div>
  );
}

export default Card;
