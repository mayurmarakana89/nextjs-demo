import React from 'react';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import ProductCard from '../ProductCard';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    }
});

const ProductsGrid = ({ products }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} alignItems="stretch">
        {products.map((product) => {
           return (
            <Grid item xs={6} sm={3}>
                <ProductCard product={product} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ProductsGrid;
