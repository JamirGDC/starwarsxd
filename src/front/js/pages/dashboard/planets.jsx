import React, { useEffect, useContext, useState } from "react";
import logo from '@img/logo.png';
import { PlanetDetail, Productdetail } from "../../widgets/cards";
import { useLocation } from 'react-router-dom';
import { useParams } from "react-router-dom";
import {
  Spinner,
} from "@material-tailwind/react";
import { Context } from '../../store/appContext';



export function Planets() {

  const location = useLocation();
  const product_id = location.state.productId;
  const { store, actions } = useContext(Context);
  

  const [productDetails, setProducts] = useState();
  const [loading, setLoading] = useState(true);

  
  // const productDetails = JSON.parse(localStorage.planetdetail);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await actions.getPlanetDetail(product_id);
        const product = JSON.parse(localStorage.planetdetail);
        setProducts(product);
        // console.log(productDetails.properties.name);
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
      
        <PlanetDetail
          title={productDetails.properties.name}
          height={productDetails.properties.diameter}
          mass={productDetails.properties.rotation_period}
          hair_color={productDetails.properties.orbital_period}
          skin_color={productDetails.properties.gravity}
          eye_color={productDetails.properties.population}
          birh_year={productDetails.properties.climate}
          gender={productDetails.properties.terrain}
        />
      
    </div>

    

  );
}

export default Planets;
