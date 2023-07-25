import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ProductCard = ({product}) => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography color="text.secondary" gutterBottom>
          {product.shipName}
        </Typography>
        <Typography variant="h5" component="div">
          {product.shipAddress?.country}{bull}{product.shipAddress?.city}
        </Typography>
        <Typography variant="body2">
          {product.shipAddress.street}
          <br />
        </Typography>
        <Typography  color="text.secondary">
          {product.details[0]?.unitPrice}$
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <div>
      <Box sx={{ maxWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </div>
  );
};

export default ProductCard;
