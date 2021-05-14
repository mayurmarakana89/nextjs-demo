import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image'

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
  padding20: {
    paddingRight: 20
  }
});

const ProductSelect = ({ products = [], onChange }) => {
  const classes = useStyles();

  return (
    <Autocomplete
      id="product-select"
      data-testid={"product-select"}
      style={{ width: '100%' }}
      options={products}
      classes={{
        option: classes.option,
      }}
      onChange={(event) => onChange(event.currentTarget.innerText)}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderOption={(option) => (
        <>
          <span className={classes.padding20}>
            <Image
              width={20}
              height={20}
              src={option.default_image_urls.small_image_url}
            />
          </span> {option.name}
        </>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="I'm looking for"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
}

export default ProductSelect;