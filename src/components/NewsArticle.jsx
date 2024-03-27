import PropTypes from "prop-types";
import { FindOutMoreIcon } from "../assets/img/ArrowIcons";

function NewsArticle({ article }) {
  return (
    <div className="shadow-lg rounded-xl lg:mx-4 my-8  bg-bg-primary h-fit lg:h-[480px]">
       <img src={article.image} alt="" className="w-[400px] h-[180px] object-cover aspect-square rounded-t-xl" />

        <div className="flex mt-[5%] ">
        <div className=" text-primary-800 justify-self-start lg:text-sm ml-[5%] mr-[2%] font-bold ">{article.source.name}</div>
       <div className=" text-text-light text-sm justify-self-start">| {new Date(article.publishedAt).toLocaleDateString('en-GB')}</div>
        </div>
       
      <div className="font-bold h-[25%] text-text-light mx-[5%] my-[5%] ">{article.description}</div>
      <div className="ml-[5%] flex my-[10%]"> 
        <FindOutMoreIcon>  
       </FindOutMoreIcon>
       <button className="text-primary-800 font-bold ml-[5%] mt-1 mb-[10%]">
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
