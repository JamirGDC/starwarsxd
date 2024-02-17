import React, { useEffect, useContext, useState } from "react";
import logo from '@img/logo.png';
import { Productdetail } from "../../widgets/cards";
import { useLocation } from 'react-router-dom';
import { useParams } from "react-router-dom";

import { Context } from '../../store/appContext';
import {
  Spinner,
} from "@material-tailwind/react";


export function Test() {

  const location = useLocation();
  const product_id = location.state.productId;
  const { store, actions } = useContext(Context);
  

  const [productDetails, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await actions.getPeopleStar(product_id);
        const product = JSON.parse(localStorage.productDetails)

        setProducts(product);
      } catch (error) {
        console.error("Error fetching products:", error);
      }finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (

    <div>
      
        <Productdetail
          title={productDetails.properties.name}
          height={productDetails.properties.height}
          mass={productDetails.properties.mass}
          hair_color={productDetails.properties.hair_color}
          skin_color={productDetails.properties.skin_color}
          eye_color={productDetails.properties.eye_color}
          birh_year={productDetails.properties.birth_year}
          gender={productDetails.properties.gender}
        />
      
    </div>

    // <Productdetail>

    // </Productdetail>

  );
}

export default Test;
