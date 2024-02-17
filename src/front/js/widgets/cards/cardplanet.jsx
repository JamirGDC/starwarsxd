import React, { useContext, useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";


import PropTypes from "prop-types";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Carousel } from "@material-tailwind/react";
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export function CardPlanet({ images_urls, key, title, product_description, product_seller, product_seller_id, producto_id, categoria, province }) {

  const [user_id, setUserId] = useState('');
  const [product_id, setProductid] = useState('');
  const navigate = useNavigate();


  const viewProfile = () => {
    setProductid(producto_id);
    navigate(`/dashboard/planets/${producto_id}`, { state: { productId: producto_id } });
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
              
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d71e379b-3f09-42b2-b3fe-26548591a750/devocdi-7a1e57d0-8bac-40d5-a70b-daea80cc8d57.png/v1/fill/w_1280,h_1280,q_80,strp/star_wars_planet_collection__1_by_ericwhitted_devocdi-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2Q3MWUzNzliLTNmMDktNDJiMi1iM2ZlLTI2NTQ4NTkxYTc1MFwvZGV2b2NkaS03YTFlNTdkMC04YmFjLTQwZDUtYTcwYi1kYWVhODBjYzhkNTcucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.BIy_1uGX86db9SWB8a01LDv3xzUP1OlA9OwnyEqflQc"
              
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



        
      </CardFooter>
    </Card>
  );
}

CardPlanet.defaultProps = {
  color: "blue",
  footer: null,
};

CardPlanet.propTypes = {
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

CardPlanet.displayName = "/src/widgets/cards/cardplanet.jsx";

export default CardPlanet;
