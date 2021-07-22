import { Grid } from "@material-ui/core";
import React, { Fragment } from "react";
import AppBarHeader from "../../components/header";
import ProductCardItem from "../../components/productCardItem";
import { MOCK_DATA } from "../../src/data";

const Products = () => {
  return (
    <Fragment>
      <AppBarHeader authorized />
      <Grid xs={12} container direction="row">
        {MOCK_DATA.map((item) => (
          <ProductCardItem key={item.id} item={item} />
        ))}
      </Grid>
    </Fragment>
  );
};

export default Products;
