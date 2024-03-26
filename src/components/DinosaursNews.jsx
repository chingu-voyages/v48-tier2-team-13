import { useState, useEffect, useRef } from "react";
import fetchDinosaursNews from "../services/NewsAPI/newsApi";
import NewsArticle from "./NewsArticle";
import Loader from "./Loader";
import { v4 as uuidv4 } from "uuid";

//test data
import { testData } from "../../dinosaurNewsTestData";

//Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//Icons
import {ArrowLeftIcon, ArrowRightIcon} from '../assets/img/ArrowIcons'

function DinosaursNews() {
  const [dinosaursNews, setDinosaursNews] = useState(testData);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetchDinosaursNews()
  //     .then((data) => {
  //       setDinosaursNews(data);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //     })
  //     .finally(() => setLoading(false));
  // }, []);

  // if (loading) {
  //   return <Loader />;
  // }

  // if (error) {
  //   return <div>Error: There was an error with news data.</div>;
  // }

    //Slider
    const settings= {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,


    }

    const arrowRef = useRef();
  
    const incrementAndDecrement = (btn) => {
      if (btn === "increment") {
        arrowRef.current.slickNext();
      } else {
        arrowRef.current.slickPrev();
      }
    };

    const displayNews =  dinosaursNews.length > 0 &&
      dinosaursNews.map((article) => (
        <NewsArticle key={uuidv4()} article={article} />
      ))

  return (
    <>
     <section  className="slider-container">
      <Slider ref={arrowRef}{...settings}>
      {displayNews}
      </Slider>
      <div className="slick-arrows">
      <button onClick={() => incrementAndDecrement("decrement")}>
          <ArrowRightIcon />
        </button>
        <button onClick={() => incrementAndDecrement("increment")}>
          <ArrowLeftIcon />
        </button>


      </div>
      </section>
  

 

   
    </>
  );
}

export default DinosaursNews;
