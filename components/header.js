import React, { Fragment, useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Badge,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Popover,
  Snackbar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import ButtonOK from "../components/button";
import { useRouter } from "next/dist/client/router";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { mergeClasses } from "@material-ui/styles";
import { useDispatch, useSelector } from "react-redux";
import HeaderCardItem from "./headerCardItem";
import { Alert } from "@material-ui/lab";
import { RESET_BASKET } from "../redux/types";
import { useSnackbar } from "notistack";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Remove } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: 16,
  },
  appBar: {
    backgroundColor: "#2f2e2e",
  },
  title: {
    flexGrow: 1,
  },
  shoppingCartContainer: {
    width: 600,
    height: 400,
    backgroundColor: "#eeeeee",
    overflow: "auto",
    padding: 10,
  },
  noBasketIcon: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
}));
const AppBarHeader = ({ authorized }) => {
  const classes = useStyles();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basketReducer.basket);
  const totalPrice = useSelector((state) => state.basketReducer.total);
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const [state, setState] = useState({
    loading: false,
    open: false,
  });

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <AppBar position="sticky" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          QMeter Food App
        </Typography>

        {authorized ? (
          <Grid>
            <IconButton onClick={handleClick}>
              <Badge badgeContent={basket.length} color="secondary">
                <ShoppingCartIcon fontSize="large" color="primary" />
              </Badge>
            </IconButton>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <Paper elevation={12} className={classes.shoppingCartContainer}>
                {basket.length > 0 ? (
                  <Fragment>
                    {basket.map((item) => (
                      <HeaderCardItem item={item} />
                    ))}
                    <Grid
                      xs={12}
                      justifyContent="center"
                      direction="column"
                      alignItems="center"
                      container
                    >
                      <Typography
                        align="center"
                        style={{ marginTop: 25 }}
                        variant="h5"
                      >
                        Toplam: {totalPrice}₺
                      </Typography>
                      <Button
                        size="medium"
                        color="primary"
                        onClick={() => {
                          setState((prev) => ({ ...prev, loading: true }));
                          setTimeout(() => {
                            dispatch({ type: RESET_BASKET });
                            setState({ loading: false, open: true });
                            enqueueSnackbar("Sepetiniz başarıyla temizlendi", {
                              variant: "success",
                            });
                          }, 1500);
                        }}
                        variant="contained"
                        disabled={state.loading}
                        style={{ marginTop: 15 }}
                      >
                        Sepete Temizle
                        {state.loading && (
                          <CircularProgress size={36} color="primary" />
                        )}
                      </Button>
                    </Grid>
                  </Fragment>
                ) : (
                  <Grid
                    xs={12}
                    style={{ marginTop: 100 }}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    container
                  >
                    <RemoveShoppingCartIcon className={classes.noBasketIcon} />
                    <Typography align="center" variant="h4" color="inherit">
                      Sepetiniz şu anda boş. Hemen ürün ekleyin.
                    </Typography>
                  </Grid>
                )}
              </Paper>
            </Popover>
          </Grid>
        ) : (
          <Button
            color="variant"
            variant="text"
            onClick={() => router.push("/login")}
            style={{ color: "white" }}
          >
            Giriş Yap
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default AppBarHeader;
