import { useState, useEffect, useRef } from "react";
import fetchDinosaursNews from "../services/NewsAPI/newsApi";
import NewsArticle from "./NewsArticle";
import Loader from "./Loader";
import { v4 as uuidv4 } from "uuid";

//test data that i used in order to not reach max daily limit of 100 news requests
import { testData } from "../../dinosaurNewsTestData";

//Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//Icons
import {ArrowLeftIcon, ArrowRightIcon,} from '../assets/img/ArrowIcons'

function DinosaursNews() {
  const [dinosaursNews, setDinosaursNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const arrowRef = useRef();

  useEffect(() => {
    fetchDinosaursNews()
      .then((data) => {
        setDinosaursNews(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: There was an error with news data.</div>;
  }

    //Slider
    const settings= {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    }

    
  
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
    <div className="bg-bg-secondary pb-0 mb-0 lg:pb-[5%] md:pb-0">
     <section className="relative z-0 flex lg:mx-[5%] pt-[5%]"  >
      <div className="absolute left-[12%] lg:left-[4.5%] lg:top-12">
      <h1 className="text-text-light font-primary font-bold leading-8 text-2xl  ">Latest News</h1>
      </div>
     
      <Slider className="lg:h-[30%] h-full w-full overflow-x-hidden lg:mx-[3%] mx-[10%] my-[20%] lg:my-0" ref={arrowRef}{...settings}>
      {displayNews}
      </Slider>
      <div className="">
      <button className="absolute inset-y-0 left-0 z-1 flex h-full items-center justify-center " onClick={() => incrementAndDecrement("decrement")}>
          <ArrowRightIcon />
        </button>
        <button className="absolute inset-y-0 right-0 z-1 flex h-full items-center justify-center " onClick={() => incrementAndDecrement("increment")}>
          <ArrowLeftIcon />
        </button>


      </div>
      </section>
  

 

   
    </div>
  );
}

export default DinosaursNews;
