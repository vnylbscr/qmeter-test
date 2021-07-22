import {
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useRouter } from "next/dist/client/router";
import Router from "next/dist/next-server/server/router";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { USER_LOGIN, USER_LOGOUT } from "../../redux/types";
const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: "#2f2e2e",
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(/loginBg.jpg)`,
    backgroundSize: "cover",
  },
  loginContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
  },
}));
const Login = () => {
  const classes = useStyles();
  const route = useRouter();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    dispatch({ type: USER_LOGIN, payload: state });
    route.push("/products");
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      className={classes.root}
      xs={12}
      item
    >
      <Grid
        xs={6}
        direction="column"
        container
        justifyContent="center"
        alignItems="center"
        item
      >
        <Typography variant="h4" style={{ color: "white" }}>
          QMeter Food App'e Giriş Yap
        </Typography>
        <Divider style={{ width: "100%" }} />
        <Grid
          container
          direction="column"
          justifyContent="center"
          className={classes.loginContainer}
          xs={12}
          item
          md={9}
        >
          <form onSubmit={handleSubmit}>
            <Grid xs={9} item container>
              <TextField
                label="E-mail"
                required
                fullWidth
                type="email"
                variant="outlined"
                name="email"
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid xs={9} container item style={{ marginTop: 15 }}>
              <TextField
                label="Şifre"
                required
                fullWidth
                type="password"
                variant="outlined"
                name="password"
                onChange={handleChangeInput}
              />
            </Grid>
            <Grid item xs={9} style={{ marginTop: 15 }}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Giriş Yap
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
