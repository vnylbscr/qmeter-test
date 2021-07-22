import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import {
  Backdrop,
  CardHeader,
  CircularProgress,
  Snackbar,
  MuiAler,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { ADD_BASKET } from "../redux/types";
import { Alert } from "@material-ui/lab";
import { useSnackbar } from "notistack";
// {
//     id: 5,
//     name: "Asus TUF Gaming Laptop",
//     author: "Enes ŞAHİN",
//     seller: "Trendyol",
//     category: "Roman, Polisiye, Gizemli",
//     price: 7599,
//     image:
//       "https://productimages.hepsiburada.net/s/86/200-200/110000028846421.jpg",
//   },
const useStyles = makeStyles({
  root: {
    maxWidth: 480,
    marginTop: 20,
    padding: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  media: {
    height: 400,
    width: 450,
    backgroundSize: "auto",
  },
});

const ProductCardItem = ({ item }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const [state, setState] = useState({
    loading: false,
    open: false,
  });
  const handleClose = () => setState({ ...state, open: false });
  if (item) {
    return (
      <Card className={classes.root}>
        <CardHeader title="Sepette %40 Indirim" />
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={item.image}
            title={item.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.name}
            </Typography>
            <Typography
              variant="h4"
              style={{ marginTop: 10, marginBottom: 10 }}
            >
              {item.price}₺
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => {
              setState((prev) => ({ ...prev, loading: true }));
              setTimeout(() => {
                dispatch({ type: ADD_BASKET, payload: item });
                setState((prev) => ({ loading: false, open: true }));
                enqueueSnackbar(`${item.name} başarıyla sepetinize eklendi.`, {
                  variant: "success",
                });
              }, 1500);
            }}
            disabled={state.loading}
          >
            Sepete Ekle
            {state.loading && <CircularProgress size={36} color="primary" />}
          </Button>
          <Button size="small" color="primary">
            Detaylar
          </Button>
        </CardActions>
      </Card>
    );
  }
};

export default ProductCardItem;
