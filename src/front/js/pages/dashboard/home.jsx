import React, { useEffect, useContext } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {
  Spinner,
} from "@material-tailwind/react";
import MultiCarousel from 'react-multi-carousel'; // Renombrado el Carousel de react-multi-carousel a MultiCarousel
import "react-multi-carousel/lib/styles.css";
import { StatisticsCard, CategoryCard, CardPlanet } from "../../widgets/cards";
import Categorycarddata from "../../data/categorycarddata"
import { useState } from 'react';
import { Context } from '../../store/appContext';
import { useNavigate } from "react-router-dom";
import banner from '@img/Bannerhomefix.png';
import { Carousel } from "@material-tailwind/react";

export function Home() {

  const { store, actions } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [user_id, setUser_id] = useState('');



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Fetching products...");
        await actions.getCharacters();
        await actions.getPlanets();
        
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8
    },
    desktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: 6
    },
    predesktop: {
      breakpoint: { max: 1600, min: 1400 },
      items: 4
    },

    tablet: {
      breakpoint: { max: 1400, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    return <button onClick={() => onClick()}> <FiChevronRight className="text-black text-2xl" /></button>
  };

  return (
    <div className="mt-12">

      <hr className="my-2 border-blue-gray-50 mt-5" />
      <h2 test>Characters</h2>


      <div className="mb-12 mt-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {store.characters.map((product) => (
          <StatisticsCard
            producto_id={product.uid}
            images_urls={product.images_urls}
            title={product.name}
            product_description={product.url}

          />
        ))}

      </div>

      <hr className="my-2 border-blue-gray-50 mt-5" />
      <h2 test>Planets</h2>


      <div className="mb-12 mt-12 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {store.planets.map((product) => (
          <CardPlanet
            producto_id={product.uid}
            images_urls={product.images_urls}
            title={product.name}
            product_description={product.url}

          />
        ))}

      </div>

    </div>
  );
}

export default Home;
