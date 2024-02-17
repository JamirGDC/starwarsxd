import React, { useContext, useState } from "react";
import { Context } from '../../store/appContext';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";


import PropTypes from "prop-types";
import { HeartIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Carousel } from "@material-tailwind/react";
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export function StatisticsCard({ images_urls, key, title, product_description, product_seller, product_seller_id, producto_id, categoria, province }) {

  const [user_id, setUserId] = useState('');
  const [product_id, setProductid] = useState('');
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false); 

  const { store, actions } = useContext(Context);

  const addToFavorites = () => {
    setIsFavorite(!isFavorite); 
    actions.addToFavorites({ id: producto_id, title, description: product_description }); 
    console.log("Agregado/quitado de favoritos:", producto_id);
  }

  const viewProfile = () => {
    setProductid(producto_id);
    navigate(`/dashboard/test/${producto_id}`, { state: { productId: producto_id } });
  }

  const viewProduct = () => {
    setProductid(producto_id);
    navigate(`/dashboard/test/${producto_id}`, { state: { productId: producto_id } });
  }
  
  return (

    
    <Card className="max-w-72 border border-black ">
      <CardHeader shadow={true} floated={false} className="h-52 mt-2 mx-2">
        <Carousel className='className="rounded-xl'>

          
            <img
              
              src="https://lumiere-a.akamaihd.net/v1/images/starwars_e58d682b.png?region=0,14,768,432"
              
              className="h-52 object-cover"
            />
          
        </Carousel>
      </CardHeader>
      <CardBody className='p-3 pt-1 pb-0'>
       
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {title}
          </Typography>

        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {product_description}
        </Typography>
        
      </CardBody>
      <CardFooter className="pb-2 pt-0 px-2 flex flex-row gap-1">


        <Button
          onClick={viewProfile}
          ripple={false}
          fullWidth={true}
          className="bg-[#2A2A2A] text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 w-[100%]"
        >
          Detalle
        </Button>
        <Button
          onClick={addToFavorites}
          ripple={false}
          fullWidth={true}
          className="bg-[#2A2A2A] flex justify-center content-center text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 w-[100%]"
        >
          <HeartIcon className={`w-6 ${isFavorite ? 'text-red-500' : ''}`} /> 
        </Button>




        
      </CardFooter>
    </Card>
  );
}

StatisticsCard.defaultProps = {
  color: "blue",
  footer: null,
};

StatisticsCard.propTypes = {
  color: PropTypes.oneOf([
    "white",
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node,
  title: PropTypes.node.isRequired,
  images_urls: PropTypes.node,
  value: PropTypes.node,
  footer: PropTypes.node,
};

StatisticsCard.displayName = "/src/widgets/cards/statistics-card.jsx";

export default StatisticsCard;
