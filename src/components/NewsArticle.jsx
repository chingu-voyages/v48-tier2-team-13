import PropTypes from "prop-types";

function NewsArticle({ article }) {
  return (
    <div className="p-5">
       <img src={article.image} alt="" className="w-[180px] h-[180px]" />

       <div>Source:{article.source.name}</div>
       <div>{article.publishedAt}</div>
      <div className="font-bold">{article.description}</div>
      <div>
        <button>
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
