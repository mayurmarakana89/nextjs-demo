import React from 'react';
import Image from 'next/image';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from './ProductCard.module.css';

const ProductCard = ({ product = {} }) => {
  if (!product) return <></>;

  return (
    <Card className={styles.root} data-testid={`product-${product.name}`}>
        <CardContent>
          <div className={styles.media}>
            <Image
                width={200}
                height={200}
                alt={product.name}
                src={product.default_image_urls.main_image_url}
            />
          </div>
          <Typography className={styles.title} align="center" variant="body2" color="textSecondary">
              {product.name}
          </Typography>
        </CardContent>
    </Card>
  );
}
export default ProductCard;