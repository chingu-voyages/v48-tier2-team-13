import { useState, useEffect, useRef } from "react";
import fetchDinosaursNews from "../services/NewsAPI/newsApi";
import NewsArticle from "./NewsArticle";
import Loader from "./Loader";
import { v4 as uuidv4 } from "uuid";

//test data that i used in order to not reach max daily limit of 100 news requests
import { testData } from "../utils/dinosaurNewsTestData";

//Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//Icons
import { ArrowLeftIcon, ArrowRightIcon } from "../assets/img/ArrowIcons";

function DinosaursNews() {
  const [dinosaursNews, setDinosaursNews] = useState(testData);
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
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          speed: 2000,
        },
      },

      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          speed: 2000,
        },
      },

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          speed: 1500,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 1000,
        },
      },
    ],
  };

  const incrementAndDecrement = (btn) => {
    if (btn === "increment") {
      arrowRef.current.slickNext();
    } else {
      arrowRef.current.slickPrev();
    }
  };

  const displayNews =
    dinosaursNews?.length > 0 &&
    dinosaursNews.map((article) => (
      <NewsArticle key={uuidv4()} article={article} />
    ));

  return (
    <div className="bg-bg-secondary">
      <div className="container bg-bg-secondary">
        <div className="bg-bg-secondary py-[45px]">
          <h2 className="text-text-light font-bold text-[23px]">Latest News</h2>
          <section className="relative z-0 flex my-[30px]">
            <Slider className="overflow-x-hidden" ref={arrowRef} {...settings}>
              {displayNews}
            </Slider>
            <div className="">
              <button
                className="absolute left-[-12px] z-1 flex top-[-15px] h-full items-center justify-center"
                onClick={() => incrementAndDecrement("decrement")}
              >
                <ArrowRightIcon />
              </button>
              <button
                className="absolute right-[-12px] z-1 flex h-full top-[-15px] items-center justify-center"
                onClick={() => incrementAndDecrement("increment")}
              >
                <ArrowLeftIcon />
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default DinosaursNews;
