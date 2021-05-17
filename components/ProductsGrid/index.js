import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import ProductCard from '../ProductCard';

import styles from './ProductsGrid.module.css';

const ProductsGrid = ({ products = [] }) => {
  return (
    <div className={styles.root}>
      {products.length > 0 ?
        <Grid container spacing={3} alignItems="stretch">
          {products.map((product) => {
            return (
              <Grid key={`card-${product.product_code}`} item xs={6} sm={3}>
                <ProductCard product={product} />
              </Grid>
            );
          })}
        </Grid> :
        <Grid item xs={12}>
          <Paper className={styles.paper}>No results</Paper>
        </Grid>
      }
    </div>
  );
};

export default ProductsGrid;
