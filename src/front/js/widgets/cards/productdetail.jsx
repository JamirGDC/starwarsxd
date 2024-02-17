import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import logo from '@img/logo.png';

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

export function Productdetail({ images_urls, key, title, product_description, product_price, product_seller, product_seller_id, product_id, height, mass, hair_color, skin_color, eye_color, birh_year, gender }) {

  const [user_id, setUserId] = useState('');
  const navigate = useNavigate();


  const viewProfile = () => {
    setUserId(product_seller_id);
    navigate(`/dashboard/chathomefix/${product_seller_id}`, { state: { userId: user_id } });
  }

  const viewProduct = () => {

  }
  return (

    <div className="flex flex-column gap-3 items-center w-full">
      <div>
      <Card className="w-[50em] flex flex-row justify-between" >
          {/* <CardHeader shadow={true} floated={false} className=" h-[5rem] w-[5rem] border mt-2 mx-2">
            <img src={logo} alt="" />
          </CardHeader> */}
          <CardBody className='p-3 pb-0'>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                {title}
              </Typography>

              

            </div>
            
            
          </CardBody>
          <CardFooter className="pt-0 px-3 flex flex-row gap-3 justify-center items-center content-center">
            

          </CardFooter>
        </Card>
      </div>
      <div>
        <Card className="w-[50em]">
          <CardHeader shadow={true} floated={false} className="h-[20em] mt-2 mx-2">
            <Carousel className='className="rounded-xl'>
              
                <img
             
                  src="https://lumiere-a.akamaihd.net/v1/images/starwars_e58d682b.png?region=0,14,768,432"
               
                  className="h-[20rem] w-full object-cover"
                />
         
            </Carousel>
          </CardHeader>
          <CardBody className='p-3 pb-0'>
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


            <Typography color="blue-gray" className="font-medium">
                Height: {height}
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                Mass: {mass}
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                Hair Color: {hair_color}
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                Skin Color: {skin_color}
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                Eye Color: {eye_color}
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                Birth Year: {birh_year}
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                Gender: {gender}
              </Typography>



            <div className="flex flex-row">
              <Typography
                variant="small"
                color="gray"
                className="font-normal text-xs opacity-75 mb-0 pb-1 pt-2"
              >
                {product_seller}
              </Typography>
              <div>

              </div>
              
              
            </div>
          </CardBody>
          <CardFooter className="pt-0 px-3 flex flex-row gap-3">


            {/* <Button
              onClick={viewProfile}
              ripple={false}
              fullWidth={true}
              className="bg-[#2A2A2A] text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 w-[100%]"
            >
              Contactar
            </Button> */}

          </CardFooter>
        </Card>
      </div>
      <div>

      </div>
    </div>
  );
}

Productdetail.defaultProps = {
  color: "blue",
  footer: null,
};

Productdetail.propTypes = {
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

Productdetail.displayName = "/src/widgets/cards/productdetail.jsx";

export default Productdetail;
