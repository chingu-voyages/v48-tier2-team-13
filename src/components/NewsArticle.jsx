import PropTypes from "prop-types";
import { FindOutMoreIcon } from "../assets/img/ArrowIcons";

function NewsArticle({ article }) {
  return (
    <div className="shadow-lg rounded-xl xl:w-[200px] 2xl:w-[220px] mx-2 lg:mx-4 lg:my-8 xl:mx-0 2xl:mx-0 bg-bg-primary lg:w-[220px] h-[480px] ">
       <img src={article.image} alt="" className="w-full h-[180px] object-cover aspect-square rounded-t-xl" />

        <div className="flex mt-[5%] ">
        <div className=" text-primary-800 justify-self-start lg:text-sm text-xs ml-[5%] mr-[2%] font-bold h-8 lg:h-10 xl:h-10 ">{article.source.name}</div>
       <div className=" text-text-light text-xs xl:mr-[2%] xl:mt-[1%] justify-self-start">| {new Date(article.publishedAt).toLocaleDateString('en-GB')}</div>
        </div>
       
      <div className="font-bold h-[30%] text-xs text-text-light mx-[5%] sm:mt-[5%] lg:my-[5%] xl:my-4 ">{article.description}</div>
      <div className="ml-[5%] flex my-[10%]"> 
        <FindOutMoreIcon>  
       </FindOutMoreIcon>
       <button className="text-primary-800 font-bold ml-[5%] mt-1 ">
       <a href={article.url} target="_blank">
              Find out more
          </a>

        </button>
      
       </div>
     
     
    </div>
  );
}

NewsArticle.propTypes = {
  article: PropTypes.object.isRequired,
};

export default NewsArticle;
