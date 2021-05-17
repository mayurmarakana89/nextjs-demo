import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Image from 'next/image'
import styles from './ProductSelect.module.css';

const ProductSelect = ({ products = [], onChange }) => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <Autocomplete
      id="product-select"
      data-testid={"product-select"}
      freeSolo
      
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
        onChange(newInputValue);
      }}
      options={products}
      getOptionLabel={(option) => option.name || inputValue}
      renderOption={(option) =>
        <>
          <span className={styles.imageIcon}>
            <Image
              width={20}
              height={20}
              src={option.default_image_urls.small_image_url}
            />
          </span> {option.name}
        </>
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label="I'm looking for"
          margin="normal"
          variant="outlined"
        />
      )}
    />
  );
}

export default ProductSelect;