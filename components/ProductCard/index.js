import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Image from 'next/image';

const useStyles = makeStyles({
  root: {
    maxWidth: 340,
    display: "flex",
    justifyContent: "center",
    maxHeight: 300
  },
  media: {
    textAlign: 'center'
  },
  title: {
    height: 40,
    marginTop: 20
  },
});

const ProductCard = ({ product = {} }) => {
  if (!product) return <></>;

  const classes = useStyles();

  return (
    <Card className={classes.root} data-testid={`product-${product.name}`}>
        <CardContent>
            <div className={classes.media}>
                <Image
                    width={200}
                    height={200}
                    alt={product.name}
                    src={product.default_image_urls.main_image_url}
                />
            </div>
            <Typography className={classes.title} align="center" variant="body2" color="textSecondary">
                {product.name}
            </Typography>
        </CardContent>
    </Card>
  );
}
export default ProductCard;