import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_BASKET } from "../redux/types";

const useStyles = makeStyles((theme) => ({
  mediaImage: {
    width: 100,
    height: 100,
  },
}));
const HeaderCardItem = ({ item }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  console.log(item);
  return (
    <Card title="Sepetim">
      <CardHeader title={item.name} />
      <CardActionArea>
        <img src={item.image} className={classes.mediaImage} />
        <CardContent>
          <Typography>{item.price}₺</Typography>
          <Typography>Adet : {item.quantity}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="large"
          color="primary"
          onClick={() => dispatch({ type: REMOVE_BASKET, payload: item.id })}
        >
          Sepetten Çıkar
        </Button>
      </CardActions>
    </Card>
  );
};

export default HeaderCardItem;
