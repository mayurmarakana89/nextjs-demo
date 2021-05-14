import React, { useState } from "react";

import Loader from '../components/Loader';
import Layout from '../components/Layout';
import ProductSelect from '../components/ProductSelect';
import ProductsGrid from "../components/ProductsGrid";

const FETCH_API_URL = "https://www.mec.ca/api/v1/products/search";

const Home = ({ products }) => {
  const [productsList, setProductsList] = useState(products);
  const [loading, setLoading] = useState(false);

  const searchProducts = async (searchTerm) => {
    setLoading(true);
    const data = await fetch(`/api/products/search?keywords=${searchTerm}`);
    const { products } = await data.json();
    
    setLoading(false);
    setProductsList(products);
  };

  return (
    <Layout title="MEC Products">
      <ProductSelect products={products} onChange={searchProducts}/>
      <br />
      {loading ?
        <Loader /> :
        <ProductsGrid products={productsList} />
      }
    </Layout>
  );
};

export const getServerSideProps = async () => {
  try {
    const data = await fetch(`${FETCH_API_URL}`);
    const { products } = await data.json();
    return {
      props: {
        products,
      },
    };
  } catch (err) {
    return {
      props: {
        products: [],
      },
    };
  }
};

export default Home;