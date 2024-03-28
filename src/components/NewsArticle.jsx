import PropTypes from "prop-types";
import { FindOutMoreIcon } from "../assets/img/ArrowIcons";

function NewsArticle({ article }) {
  return (
    <div className="shadow-lg rounded-xl bg-bg-primary flex flex-col h-[375px]">
      <img
        src={article.image}
        alt="article-image"
        className="w-full h-[180px] object-cover aspect-square rounded-t-xl"
      />

      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center mb-[15px] gap-1">
            <div className="text-[14px] text-primary-800 font-bold">
              {article.source.name}
            </div>
            <div className="text-text-light text-xs xl:mr-[2%] xl:mt-[1%] justify-self-start font-bold">
              | {new Date(article.publishedAt).toLocaleDateString("en-GB")}
            </div>
          </div>

          <div className="text-[18px] text-text-light text-sm mb-3 font-bold">
            {article.title}
          </div>
        </div>
        <a href={article.url} target="_blank" className="flex gap-2">
          <FindOutMoreIcon />
          <button className="text-primary-800 font-bold">Find out more</button>
        </a>
      </div>
    </div>
  );
}

NewsArticle.propTypes = {
  article: PropTypes.object.isRequired,
};

export default NewsArticle;
