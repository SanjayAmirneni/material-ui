import React from "react";
import {makeStyles} from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import productList from '../constants';
import Product from "./Product";

const Content = () => {

    console.log(typeof(productList))
    const getCoffeMakerCard = coffeMakerObj => {
        return (
            <Grid item xs={12} sm={4}>
                <Product {...coffeMakerObj} />
            </Grid>
    )}
    return (
  
        <Grid container spacing={2}>
            {productList?.map(coffeMakerObj=>getCoffeMakerCard(coffeMakerObj))}
        </Grid>

    )
}

export default Content;