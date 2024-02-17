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

export function PlanetDetail({ images_urls, key, title, product_description, product_price, product_seller, product_seller_id, product_id, height, mass, hair_color, skin_color, eye_color, birh_year, gender }) {

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
                  
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d71e379b-3f09-42b2-b3fe-26548591a750/devocdi-7a1e57d0-8bac-40d5-a70b-daea80cc8d57.png/v1/fill/w_1280,h_1280,q_80,strp/star_wars_planet_collection__1_by_ericwhitted_devocdi-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2Q3MWUzNzliLTNmMDktNDJiMi1iM2ZlLTI2NTQ4NTkxYTc1MFwvZGV2b2NkaS03YTFlNTdkMC04YmFjLTQwZDUtYTcwYi1kYWVhODBjYzhkNTcucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.BIy_1uGX86db9SWB8a01LDv3xzUP1OlA9OwnyEqflQc"
                  
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
                Diameter: {height}
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                Rotation Period: {mass}
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                Orbital Period: {hair_color}
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                Gravity: {skin_color}
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                Population: {eye_color}
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                Climate: {birh_year}
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                Terrain: {gender}
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

PlanetDetail.defaultProps = {
  color: "blue",
  footer: null,
};

PlanetDetail.propTypes = {
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

PlanetDetail.displayName = "/src/widgets/cards/planetdetail.jsx";

export default PlanetDetail;
