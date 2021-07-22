import { Button as MaterialButton } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 80,
    color: "#fff",
  },
}));
const ButtonOK = ({ onClick, label, ...rest }) => {
  const classes = useStyles();
  return (
    <MaterialButton
      variant="contained"
      onClick={onClick}
      className={classes.Button}
      {...rest}
    >
      {label}
    </MaterialButton>
  );
};

export default ButtonOK;
